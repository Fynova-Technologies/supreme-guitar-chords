import { useState, useEffect } from "react";
import { MailVerificationModelProps } from "@/types";
import mail from "../../assets/email.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function UnverifiedMail() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently, logout } =
    useAuth0();
  const navigate = useNavigate();

  const [sending, setSending] = useState(false);
  const [sentMsg, setSentMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState<number>(0);
  const [checking, setChecking] = useState(false);

  // Cooldown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => Math.max(0, c - 1)), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  // Poll verification status every 5 seconds
  useEffect(() => {
    if (!isAuthenticated || !user || user.email_verified) return;

    const interval = setInterval(async () => {
      try {
        const resp = await fetch(
          `http://localhost:8000/api/check-email-verified-public?user_id=${encodeURIComponent(
            user?.sub ?? ""
          )}`
        );
        if (resp.ok) {
          const json = await resp.json();
          if (json.email_verified) {
            localStorage.removeItem(`user_seen_${user.sub}`);
            window.location.href = "/";
          }
        }
      } catch (err) {
        console.log("Auto-check failed:", err);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAuthenticated, user]);

  if (isLoading || !isAuthenticated || !user) return null;

  async function resendVerification() {
    if (cooldown > 0) return;
    setSending(true);
    setError(null);
    setSentMsg(null);

    try {
      const token = await getAccessTokenSilently();
      const res = await fetch("http://localhost:8000/api/resend-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user_id: user?.sub }),
      });

      const text = await res.text();
      let json;
      try {
        json = text ? JSON.parse(text) : {};
      } catch (parseError) {
        throw new Error("Invalid response from server");
      }

      if (!res.ok) throw new Error(json.error || `Server error: ${res.status}`);

      setSentMsg("Verification email sent — check your inbox (and spam).");
      setCooldown(60);
    } catch (err: any) {
      setError(err?.message || "Failed to send verification email.");
    } finally {
      setSending(false);
    }
  }

  async function checkVerified() {
    setChecking(true);
    setError(null);
    try {
      const resp = await fetch(
        `http://localhost:8000/api/check-email-verified-public?user_id=${encodeURIComponent(
          user?.sub ?? ""
        )}`
    );
      const text = await resp.text();
      let json;
      try {
        json = text ? JSON.parse(text) : {};
      } catch {
        throw new Error("Invalid response from server");
      }
      if (!resp.ok) throw new Error(json.error || JSON.stringify(json));

      if (json.email_verified) {
        localStorage.removeItem(`user_seen_${user?.sub}`);
        window.location.href = "/";
      } else {
        setError(
          "Email still unverified. Click the link in your email, then press 'I verified'."
        );
      }
    } catch (err: any) {
      setError(err?.message || "Failed to check verification status.");
    } finally {
      setChecking(false);
    }
  }

  const handleBack = () => {
    localStorage.removeItem(`user_seen_${user?.sub}`);

    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
    window.history.replaceState(null, "", "/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700">
        <div className="flex flex-row justify-between mb-4 pl-24 relative">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Verify Your Mail
          </h2>
          <button
            onClick={handleBack}
            className=" text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 text-2xl"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="flex items-center justify-center mb-6">
          <img src={mail} alt="mail" className="w-24 h-24" />
        </div>

        <p className="mb-5 text-gray-700 dark:text-gray-300">
          We sent a verification link to <strong>{user?.email}</strong>. Please
          open the email and click the verification link.
        </p>

        <div className="flex flex-wrap justify-between gap-3 mb-3">
          <button
            onClick={resendVerification}
            disabled={sending || cooldown > 0}
            className={`px-4 py-2 rounded-md border ${
              sending || cooldown > 0
                ? "border-gray-300 dark:border-gray-600 text-gray-400 cursor-not-allowed"
                : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {cooldown > 0
              ? `Resend (${cooldown}s)`
              : sending
              ? "Sending..."
              : "Resend verification"}
          </button>

          <button
            onClick={checkVerified}
            disabled={checking}
            className={`px-4 py-2 rounded-md text-white ${
              checking
                ? "bg-blue-400 dark:bg-blue-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            }`}
          >
            {checking ? "Checking..." : "I verified — check now"}
          </button>
        </div>

        {sentMsg && (
          <div className="text-green-600 dark:text-green-400 mb-2">
            {sentMsg}
          </div>
        )}
        {error && (
          <div className="text-red-600 dark:text-red-400 mb-2">{error}</div>
        )}

        <p className="text-xs text-gray-500 dark:text-gray-400">
          Didn't receive the email? Check your spam/promotions folder, or ask to
          resend. After verifying, press "I verified — check now".
        </p>
      </div>
    </div>
  );
}

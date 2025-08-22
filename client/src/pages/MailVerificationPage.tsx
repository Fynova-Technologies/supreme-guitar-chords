// verifies if the user is verified or not

import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect, useRef } from "react";
import MailVerificationModel from "@/components/MailVerificationModel";

interface MailVerificationPageProps {
  justSignedUp?: boolean;
}

export function MailVerificationPage({
  justSignedUp,
}: MailVerificationPageProps) {
  const [status, setStatus] = useState<
    "checking" | "no-userId" | "verified" | "not-verified" | "error"
  >("checking"); // "checking", "no_userId", "verified", "not verified", "error"
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  const attemptsRef = useRef(0);
  const pollTimeoutRef = useRef<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

    console.log("VerifyPage user:", user);
  console.log("VerifyPage status:", status);

  useEffect(() => {
    console.log("Current URL:", window.location.href);
    console.log("Auth0 state:", { isLoading, isAuthenticated, user });
  }, [isLoading, isAuthenticated, user]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

        // DEBUG: Log all URL parameters
    console.log("All URL parameters:");
    for (const [key, value] of urlParams.entries()) {
      console.log(`  ${key}: ${value}`);
    }

    if (urlParams.get("verified") === "true") {
      // Toast.success("Email verified successfully!");
      setToastMessage("Email verified successfully!");
      setToastOpen(true);
      setStatus(() => "verified");
      return;
    }

    // const userId = urlParams.get("user_id");
        // Try multiple possible parameter names for user ID
    const userId = urlParams.get("user_id") || 
                   urlParams.get("user-id") || 
                   urlParams.get("userId") ||
                   urlParams.get("id");
    
    console.log("Found userId:", userId);
    if (!userId) {
      setStatus(() => "no-userId");
      return;
    }

    let cancelled = false;
    attemptsRef.current = 0;

    const checkOnce = async () => {
      if (cancelled) return;

      attemptsRef.current++;
      try {
        const resp = await fetch(
          `http://localhost:8000/api/check-email-verified-public?user_id=${encodeURIComponent(
            userId
          )}`
        );

        if (!resp.ok) {
          throw new Error((await resp.text()) || `Status ${resp.status}`);
        }

        const body = await resp.json();

        if (body.email_verified) {
          if (!cancelled) {
            // toast.success("Email verified! You can now log in.");
            setToastMessage("Email verified! You can now log in.");
            setToastOpen(true);
            setStatus(() => "verified");
          }
        } else {
          if (attemptsRef.current >= 20) {
            if (!cancelled) setStatus(() => "not-verified");
          } else {
            if (!cancelled) {
              setStatus(() => "checking");
              pollTimeoutRef.current = window.setTimeout(checkOnce, 3000);
            }
          }
        }
      } catch (err) {
        if (!cancelled) {
          const msg = err instanceof Error ? err.message : String(err);
          setErrorMsg(msg);
          setStatus(() => "error");
        }
      }
    };

    checkOnce();

    return () => {
      cancelled = true;
      if (pollTimeoutRef.current) clearTimeout(pollTimeoutRef.current);
    };
  }, []);

  const handleLogin = async () => {
    try {
      await loginWithRedirect({ appState: { returnTo: "/" } });
    } catch (err) {
      console.warn("loginWithRedirect failed, falling back to /login", err);
      window.location.href = "/login";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {status === "checking" ? (
        <MailVerificationModel
          title={justSignedUp ? "Welcome!" : "Verifying your email"}
          message={
            justSignedUp
              ? "Thanks for signing up! Please check your email to verify your account."
              : "We are checking your verification status. Please wait..."
          }
        />
      ) : status === "verified" ? (
        <MailVerificationModel
          title="Thank You For Signing Up"
          message="Your email has been verified. Click below to log in and continue."
          buttonText="Log in"
          buttonAction={handleLogin}
        />
      ) : status === "not-verified" ? (
        <MailVerificationModel
          title={justSignedUp ? "Almost there!" : "Still not verified"}
          message={
            justSignedUp
              ? "Please check your email and click the verification link to continue."
              : "We could not confirm your email verification yet. Please wait a moment and try again, or sign in manually."
          }
          extraButtons={[
            { text: "Check again", action: () => window.location.reload() },
            { text: "Sign in", action: handleLogin },
          ]}
        />
      ) : status === "no-userId" ? (
        <MailVerificationModel
          title="Email verification"
          message="We could not find the verification information in the URL. Please sign in and we will detect your verified status."
          buttonText="Sign in"
          buttonAction={handleLogin}
        />
      ) : (
        <MailVerificationModel
          title="Error checking verification"
          message="There was an error checking verification status"
          extraButtons={[
            { text: "Try again", action: () => window.location.reload() },
            { text: "Sign in", action: handleLogin },
          ]}
        />
      )}
    </div>
  );
}

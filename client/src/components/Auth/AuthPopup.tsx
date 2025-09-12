import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthPopupProps } from "@/types";

function AuthPopup({ visible, onClose, onLogin, onSignup }: AuthPopupProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [btnLoading, setBtnLoading] = useState(true);
  const { loginWithPopup, isLoading } = useAuth0();

  if (!visible) {
    return null;
  }

  const handleAuth = async (type: "login" | "signup") => {
    setBtnLoading(true);
    try{
      if (type === "login"){
        await loginWithPopup();
      } else {
        await loginWithPopup({ authorizationParams: { screen_hint: "signup"}});
      }
    }catch (err){
      console.log("error", err);
    } finally {
      setBtnLoading(false);
    }
  }

  return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome to Supreme Guitar Chords
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
            aria-label="Close"
            disabled={isLoading}
          >
            ×
          </button>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
          Sign up or login to enjoy our website features.
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => handleAuth("login")}
            className="w-full mt-4 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Signing In...
              </div>
            ) : (
              "Sign In"
            )}
          </button>

                {/* Toggle */}        
        <p className="mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </p>

          <button
            onClick={() => handleAuth("signup")}
            className="w-full mt-4 bg-gray-600 text-white py-4 px-4 rounded-md hover:bg-gray-700 transition"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Creating Account...
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </div>

        {/* Close link */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 underline disabled:opacity-50"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthPopup;


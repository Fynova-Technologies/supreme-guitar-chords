import React, { useState } from "react";
import { ContactUs } from "@/components/ContactUs";
import { Layout } from "@/components/Layout";
import AuthPopup from "@/components/Auth/AuthPopup";

export function ContactUsPage() {
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <ContactUs onRequireLogic={() => setShowAuthPopup(true)} />

      {showAuthPopup && (
        <AuthPopup
          visible={showAuthPopup}
          onClose={() => setShowAuthPopup(false)}
          // These props are now handled inside AuthPopup with Auth0
          onLogin={() => {}}
          onSignup={() => {}}
        />
      )}
    </div>
  );
}

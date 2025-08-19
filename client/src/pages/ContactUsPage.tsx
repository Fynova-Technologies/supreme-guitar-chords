import React, { useState } from "react";
import { ContactUs } from "@/components/ContactUs";

export function ContactUsPage() {
    const [showAuthPopup, setShowAuthPopup] = useState(false);
  return (
    <div className="w-full max-w-6xl mx-auto mt-10">
      <ContactUs />
      {/* <ContactUs onRequireLogic={() => setShowAuthPopup(true)}/> */}
    </div>
  );
}
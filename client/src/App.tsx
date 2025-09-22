import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArtistPage from "./pages/artist/index";
import SongPage from "./pages/artist/[song]";
import FavoritesPage from "./pages/favorites";
import { useEffect } from "react";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";
import { AboutUsPage } from "@/pages/AboutUsPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { MailVerificationPage } from "./pages/MailVerificationPage";
import UnverifiedMail from "./components/UnverifiedMailModel";
import { useAuth0 } from "@auth0/auth0-react";
import AuthPopupManager from "./pages/AuthPopupManager";

const queryClient = new QueryClient();

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [justSignedUp, setJustSignedUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user just signed up (new user without verified email)
    if (isAuthenticated && user && !user.email_verified) {
      // Always show verification modal for unverified users
      const isNewUser = !localStorage.getItem(`user_seen_${user.sub}`);
      setJustSignedUp(isNewUser);
      // setShowVerificationModal(true);
      navigate("/verify", {replace: false});

      //Only set localStorage after first signup
      if (isNewUser) {
        localStorage.setItem(`user_seen_${user.sub}`, "true");
      }
    } else if (isAuthenticated && user && user.email_verified) {
      // User is verified, hide modal and allow app access
      setShowVerificationModal(false);
      setJustSignedUp(false);
    }
  }, [isAuthenticated, user]);

  // Show loading spinner while Auth0 is initializing
  if (isLoading) {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </QueryClientProvider>
    );
  }

  // Normal app flow
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/verify-email" element={<MailVerificationPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/artist/:artist" element={<ArtistPage />} />
            <Route path="/artist/:artist/song/:song" element={<SongPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/verify" element={<UnverifiedMail/>} />
            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <AuthPopupManager />
        {/* </BrowserRouter> */}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;


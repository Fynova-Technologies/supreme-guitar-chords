//Protects any children by checking isAuthenticated.

import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const location = useLocation();

  if (isLoading) return <>Loading...</>;

  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  if (user && !user.email_verified) {
    // Redirect unverified users to email verification page
    return <Navigate to="/verify-email" replace />;
  }

  return <>{children}</>;
}

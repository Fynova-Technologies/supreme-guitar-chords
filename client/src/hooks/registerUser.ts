// import { useAuth0 } from "@auth0/auth0-react";

// export const useRegisterUser = () => {
//   const { getAccessTokenSilently, user, isAuthenticated, isLoading } = useAuth0();
//   const VITE_API_URL = import.meta.env.VITE_API_URL;

//   const registerUser = async () => {
//     if (isLoading) {
//       console.warn("Auth0 is still loading—try again later.");
//       return;
//     }
//     if (!isAuthenticated || !user) {
//       console.warn("User not authenticated—cannot register.");
//       return;
//     }

//     try {
//       const token = await getAccessTokenSilently();

//       const res = await fetch(`${VITE_API_URL}/api/users`, {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           auth0Id: user.sub,
//           username: user.nickname || user.name || user.email?.split("@")[0],
//           email: user.email,
//         }),
//       });

//       if (!res.ok) {
//         const err = await res.json();
//         console.error("Register API error:", err);
//       } else {
//         const data = await res.json();
//         console.log("Registered user response:", data);
//       }
//     } catch (err) {
//       console.error("Error registering user:", err);
//     }
//   };

//   return { registerUser };
// };


import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState, useCallback } from "react";

export const useRegisterUser = () => {
  const { getAccessTokenSilently, user, isAuthenticated, isLoading } = useAuth0();
  const [isRegistered, setIsRegistered] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  const registerUser = useCallback(async () => {
    if (isLoading || isRegistering || isRegistered) {
      console.log("Skipping registration:", { isLoading, isRegistering, isRegistered });
      return;
    }
    
    if (!isAuthenticated || !user) {
      console.warn("User not authenticated—cannot register.");
      return;
    }

    // Check if already registered in localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    if (registeredUsers.includes(user.sub)) {
      console.log("User already registered (cached)");
      setIsRegistered(true);
      return;
    }

    setIsRegistering(true);

    try {
      const token = await getAccessTokenSilently();

      const res = await fetch(`${VITE_API_URL}/api/users`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          auth0Id: user.sub,
          username: user.nickname || user.name || user.email?.split("@")[0],
          email: user.email,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        // If user already exists, that's fine
        if (res.status === 409 || err.message?.includes('already exists')) {
          console.log("User already exists in database");
          setIsRegistered(true);
          // Cache the registration
          const updatedRegisteredUsers = [...registeredUsers, user.sub];
          localStorage.setItem('registeredUsers', JSON.stringify(updatedRegisteredUsers));
        } else {
          console.error("Register API error:", err);
        }
      } else {
        const data = await res.json();
        console.log("Registered user response:", data);
        setIsRegistered(true);
        // Cache the registration
        const updatedRegisteredUsers = [...registeredUsers, user.sub];
        localStorage.setItem('registeredUsers', JSON.stringify(updatedRegisteredUsers));
      }
    } catch (err) {
      console.error("Error registering user:", err);
    } finally {
      setIsRegistering(false);
    }
  }, [getAccessTokenSilently, user, isAuthenticated, isLoading, isRegistering, isRegistered, VITE_API_URL]);

  // Auto-register when user becomes authenticated
  useEffect(() => {
    if (isAuthenticated && user && !isRegistered && !isRegistering) {
      registerUser();
    }
  }, [isAuthenticated, user, isRegistered, isRegistering, registerUser]);

  return { 
    registerUser, 
    isRegistered, 
    isRegistering 
  };
};

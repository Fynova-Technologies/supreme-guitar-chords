import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchBar } from "@/components/SearchBar";
import { legalRoutes } from "@/config/legal.config";
import { LoginButton } from "./Auth/LoginButton";
import AuthPopup from "./Auth/AuthPopup";
import { useAuth0 } from "@auth0/auth0-react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const legalItems = legalRoutes;
  const { isAuthenticated } = useAuth0();
  const [showAuthPopup, setShowAuthPopup] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleFavoritesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAuthenticated) {
      e.preventDefault(); // prevent navigation
      setShowAuthPopup(true); // show auth popup
    } else {
      // optional: navigate manually
      navigate("/favorites");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              ChordVerse
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:block w-[200px]">
              <SearchBar />
            </div>
            <a
              href="/favorites"
              onClick={handleFavoritesClick}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Favorites
            </a>
            <ThemeToggle />
            <LoginButton />
          </div>
        </div>

        <div className="container mx-auto py-2 sm:hidden">
          <SearchBar />
        </div>
      </header>

      <main className="flex-1 container mx-auto py-6 px-4">{children}</main>

      <footer className="border-t py-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} ChordVerse. All rights reserved.
            {legalItems.map((items) => (
              <Link
                key={items.path}
                to={items.path}
                className="ml-2 text-primary hover:underline"
              >
                {items.title}
              </Link>
            ))}
          </p>
        </div>
      </footer>
      {showAuthPopup && (
        <AuthPopup
          visible={showAuthPopup}
          onClose={() => setShowAuthPopup(false)}
          onLogin={() => {}}
          onSignup={() => {}}
        />
      )}
    </div>
  );
}

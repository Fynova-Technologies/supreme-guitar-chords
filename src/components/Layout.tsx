
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchBar } from "@/components/SearchBar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
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
            <Link 
              to="/favorites" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Favorites
            </Link>
            <ThemeToggle />
          </div>
        </div>
        
        <div className="container mx-auto py-2 sm:hidden">
          <SearchBar />
        </div>
      </header>
      
      <main className="flex-1 container mx-auto py-6 px-4">
        {children}
      </main>
      
      <footer className="border-t py-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ChordVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

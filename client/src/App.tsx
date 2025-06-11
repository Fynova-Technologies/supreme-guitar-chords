
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ArtistPage from "./pages/artist/[artist]/index";
import SongPage from "./pages/artist/[artist]/song/[song]";
import FavoritesPage from "./pages/favorites";
// import { io } from 'socket.io-client'
import io from 'socket.io-client';
import { useEffect } from "react";

const socket = io('http://localhost:8000');
const queryClient = new QueryClient();

const App = () => {
   useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server with ID:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/artist/:artist" element={<ArtistPage />} />
          <Route path="/artist/:artist/song/:song" element={<SongPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  )
};

export default App;

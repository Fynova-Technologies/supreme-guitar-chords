import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Favorite } from '../types/favorite';
import {toast} from 'sonner';

interface ChordVerseState {
  // Theme
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  
  // Favorites - store the full favorite objects with _id
  favorites: Favorite[];
  fetchFavorites: (userId: string) => Promise<void>;
  addFavorite: (artistName: string, songTitle: string, userId: string) => Promise<void>;
  removeFavorite: (artistName: string, songTitle: string, userId: string) => Promise<void>;
  isFavorite: (artistName: string, songTitle: string) => boolean;
  
  // Transposition
  currentTransposition: number;
  setTransposition: (semitones: number) => void;
  
  // Autoscroll
  autoscrollSpeed: number;
  isAutoscrolling: boolean;
  setAutoscrollSpeed: (speed: number) => void;
  setIsAutoscrolling: (isScrolling: boolean) => void;
  
  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useChordVerseStore = create<ChordVerseState>()(
  persist(
    (set, get) => ({
      // Theme
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      
      // Favorites
      favorites: [],
      
      fetchFavorites: async (userId: string) => {
        try {
          if (!userId) return;
          const res = await fetch(`${import.meta.env.VITE_API_URL}/api/favorites?user_id=${userId}`);
          if (!res.ok) throw new Error('Failed to fetch favorites');
          const data: Favorite[] = await res.json();
          set({ favorites: data });
        } catch (err) {
          console.error("Failed to fetch favorites", err);
        }
      },
      
      addFavorite: async (artistName: string, songTitle: string, userId: string) => {
        try {
          if (!userId) throw new Error("User not logged in");
          
          const res = await fetch(`${import.meta.env.VITE_API_URL}/api/favorites?user_id=${userId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ artistName, songTitle }),
          });
          
          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to add favorite");
          }
          
          const result = await res.json();
          
          // Add to local store with the new _id
          const newFavorite: Favorite = {
            _id: result.insertedId,
            artistName,
            songTitle,
            userId
          };
          
          toast.success(`Added "${songTitle}" to favorites`);
          set({ favorites: [...get().favorites, newFavorite] });
        } catch (err) {
          console.error("Add favorite error:", err);
          // Optionally show user-friendly error message
          throw err;
        }
      },
      
      removeFavorite: async (artistName: string, songTitle: string, userId: string) => {
        try {
          if (!userId) throw new Error("User not logged in");
          
          console.log('Removing favorite:', { artistName, songTitle, userId });
          
          // First check if the favorite exists in local store
          const existingFavorite = get().favorites.find(f => 
            f.artistName === artistName && f.songTitle === songTitle
          );
          
          if (!existingFavorite) {
            console.log('Favorite not found in local store, removing from UI anyway');
            return; // Already removed from local state
          }
          
          // Try to remove from server
          const res = await fetch(`${import.meta.env.VITE_API_URL}/api/favorites?user_id=${userId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ artistName, songTitle }),
          });
          
          console.log('Response status:', res.status);
          
          if (!res.ok) {
            let errorMessage = "Failed to remove favorite";
            try {
              const errorData = await res.json();
              console.log('Error response:', errorData);
              errorMessage = errorData.error || errorMessage;
              
              // If favorite not found on server, remove it from local state anyway
              if (res.status === 404 || errorMessage.includes('not found')) {
                console.log('Favorite not found on server, removing from local state');
                set({ 
                  favorites: get().favorites.filter(f => 
                    !(f.artistName === artistName && f.songTitle === songTitle)
                  ) 
                });
                return; // Successfully "removed" (it wasn't there anyway)
              }
            } catch (parseError) {
              console.log('Failed to parse error response:', parseError);
              errorMessage = `${res.status}: ${res.statusText}`;
            }
            throw new Error(errorMessage);
          }
          
          console.log('Successfully removed favorite from server');
          toast.success(`Removed "${songTitle}" from favorites`);
          
          // Remove from local store
          set({ 
            favorites: get().favorites.filter(f => 
              !(f.artistName === artistName && f.songTitle === songTitle)
            ) 
          });
        } catch (err) {
          console.error("Remove favorite error:", err);
          
          // If there's an error but the favorite should be removed from UI anyway
          // (e.g., it doesn't exist on server), we can still remove it from local state
          if (err.message.includes('not found') || err.message.includes('404')) {
            console.log('Removing from local state despite server error');
            set({ 
              favorites: get().favorites.filter(f => 
                !(f.artistName === artistName && f.songTitle === songTitle)
              ) 
            });
            return;
          }
          
          throw err;
        }
      },
      
      // Force refresh from server and clean up any inconsistencies
      syncFavoritesWithServer: async (userId: string) => {
        try {
          if (!userId) return;
          
          console.log('Syncing favorites with server...');
          
          // Clear local state first
          set({ favorites: [] });
          
          // Fetch fresh data from server
          const res = await fetch(`${import.meta.env.VITE_API_URL}/api/favorites?user_id=${userId}`);
          if (!res.ok) throw new Error('Failed to fetch favorites from server');
          
          const serverFavorites: Favorite[] = await res.json();
          set({ favorites: serverFavorites });
          
          console.log('Successfully synced with server. Found', serverFavorites.length, 'favorites');
        } catch (err) {
          console.error("Failed to sync with server", err);
        }
      },
      
      isFavorite: (artistName: string, songTitle: string) => {
        return get().favorites.some(f => 
          f.artistName === artistName && f.songTitle === songTitle
        );
      },
      currentTransposition: 0,
      setTransposition: (semitones) => set({ currentTransposition: semitones }),
      
      // Autoscroll
      autoscrollSpeed: 1,
      isAutoscrolling: false,
      setAutoscrollSpeed: (speed) => set({ autoscrollSpeed: speed }),
      setIsAutoscrolling: (isScrolling) => set({ isAutoscrolling: isScrolling }),
      
      // Search
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    {
      name: 'chordverse-storage',
    }
  )
);
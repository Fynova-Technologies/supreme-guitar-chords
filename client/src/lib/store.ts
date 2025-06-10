
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Artist, Song } from '@/types';

interface ChordVerseState {
  // Theme
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  
  // Favorites
  favorites: { artistName: string, songTitle: string }[];
  addFavorite: (artistName: string, songTitle: string) => void;
  removeFavorite: (artistName: string, songTitle: string) => void;
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
      addFavorite: (artistName, songTitle) => {
        const currentFavorites = get().favorites;
        if (!get().isFavorite(artistName, songTitle)) {
          set({ 
            favorites: [...currentFavorites, { artistName, songTitle }] 
          });
        }
      },
      removeFavorite: (artistName, songTitle) => {
        set({ 
          favorites: get().favorites.filter(
            fav => !(fav.artistName === artistName && fav.songTitle === songTitle)
          ) 
        });
      },
      isFavorite: (artistName, songTitle) => {
        return get().favorites.some(
          fav => fav.artistName === artistName && fav.songTitle === songTitle
        );
      },
      
      // Transposition
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

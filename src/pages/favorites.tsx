
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { SongCard } from "@/components/SongCard";
import { Artist } from "@/types";
import { useChordVerseStore } from "@/lib/store";
// import chordsData from "@/data/chordsData.json";
import music from "@/data/artists.json"

function FavoritesPage() {
  const { favorites } = useChordVerseStore();
  const [favoriteSongs, setFavoriteSongs] = useState<{song: any, artistName: string}[]>([]);
  
  useEffect(() => {
    const artists = music.artists as unknown as Artist[];
    const songs = favorites.map(fav => {
      const artist = artists.find(a => a.name === fav.artistName);
      const song = artist?.songs.find(s => s.title === fav.songTitle);
      
      if (artist && song) {
        return { song, artistName: artist.name };
      }
      return null;
    }).filter(Boolean) as {song: any, artistName: string}[];
    
    setFavoriteSongs(songs);
  }, [favorites]);
  
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Favorite Songs</h1>
        
        {favoriteSongs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">You haven't added any favorites yet.</p>
            <p>
              Browse songs and click the star icon to add them to your favorites.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {favoriteSongs.map(({ song, artistName }) => (
              <SongCard 
                key={`${artistName}-${song.title}`} 
                song={song} 
                artistName={artistName} 
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default FavoritesPage;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SongCard } from "@/components/SongCard";
import { Artist, Song } from "@/types";
import { fuzzySearch } from "@/lib/utils";
import { useChordVerseStore } from "@/lib/store";
import chordsData from "@/data/chords.json";

function ArtistPage() {
  const { artist } = useParams<{ artist: string }>();
  const { searchQuery } = useChordVerseStore();
  const [artistData, setArtistData] = useState<Artist | null>(null);
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
  
  useEffect(() => {
    if (artist) {
      const decodedArtist = decodeURIComponent(artist);
      const foundArtist = (chordsData.artists as Artist[]).find(
        a => a.name.toLowerCase() === decodedArtist.toLowerCase()
      );
      
      if (foundArtist) {
        setArtistData(foundArtist);
        
        if (searchQuery && searchQuery.trim() !== '') {
          const results = fuzzySearch(foundArtist.songs, searchQuery, ['title']);
          setFilteredSongs(results);
        } else {
          setFilteredSongs(foundArtist.songs);
        }
      }
    }
  }, [artist, searchQuery]);
  
  if (!artistData) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-[50vh]">
          <p className="text-lg text-muted-foreground">Artist not found</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{artistData.name}</h1>
        
        {filteredSongs.length === 0 ? (
          <p className="text-center py-12 text-muted-foreground">
            {searchQuery 
              ? "No songs found matching your search." 
              : "No songs available for this artist."}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredSongs.map((song) => (
              <SongCard 
                key={song.title} 
                song={song} 
                artistName={artistData.name} 
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default ArtistPage;

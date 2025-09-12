import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { SongCard } from "@/components/SongCard";
import { Artist, Song } from "@/types";
import { fuzzySearch } from "@/lib/utils";
import { useChordVerseStore } from "@/lib/store";

function ArtistPage() {
  const { artist } = useParams<{ artist: string }>();
  const { searchQuery } = useChordVerseStore();
  const [artistData, setArtistData] = useState<Artist | null>(null);
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);

  useEffect(() => { 
    async function fetchFavArtist() {
      if (!artist) return;

      const decodedArtist = decodeURIComponent(artist);

      try {
        const res = await fetch("http://localhost:8080/api/artists");
        const songsData = await res.json();

        // Group songs by artist name (same logic as in Index component)
        const artistsMap = new Map();
        
        songsData.forEach((song: any) => {
          const artistName = song.artist;
          if (!artistsMap.has(artistName)) {
            artistsMap.set(artistName, {
              _id: artistName,
              name: artistName,
              songs: []
            });
          }
          artistsMap.get(artistName).songs.push(song);
        });

        const groupedArtists = Array.from(artistsMap.values());

        // Find the specific artist
        const foundArtist = groupedArtists.find(
          a => a.name.toLowerCase() === decodedArtist.toLowerCase()
        );

        if (foundArtist) {
          setArtistData(foundArtist);
          setFilteredSongs(
            searchQuery?.trim()
              ? fuzzySearch(foundArtist.songs, searchQuery, ['title'])
              : foundArtist.songs
          );
        } else {
          setArtistData(null);
          setFilteredSongs([]);
        }
      } catch (error) {
        console.error("Failed to fetch artists", error);
      }
    }

    fetchFavArtist();
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
                key={song._id || song.title} 
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
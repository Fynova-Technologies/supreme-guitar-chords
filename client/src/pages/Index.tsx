import { useEffect, useState, useCallback } from "react";
import { Layout } from "@/components/Layout";
import { ArtistCard } from "@/components/ArtistCard";
import { Artist } from "@/types";
import { fuzzySearch } from "@/lib/utils";
import { useChordVerseStore } from "@/lib/store";
import { io, Socket } from "socket.io-client";

function Index() {
  const { searchQuery } = useChordVerseStore();
  const [artists, setArtists] = useState<Artist[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [filtered, setFiltered] = useState<Artist[]>([]);
     
 const API_URL = "http://localhost:8080";

  const fetchArtists = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/artists`);
      const text = await res.text();
      try {
        const songsData = JSON.parse(text);
        
        // Group songs by artist name
        const artistsMap = new Map();
        
        songsData.forEach((song: any) => {
          const artistName = song.artist;
          if (!artistsMap.has(artistName)) {
            artistsMap.set(artistName, {
              _id: artistName, // Use artist name as ID
              name: artistName,
              songs: []
            });
          }
          artistsMap.get(artistName).songs.push(song);
        });
        
        const groupedArtists = Array.from(artistsMap.values());
        
        setArtists(groupedArtists);
      } catch {
        console.error("Failed to parse JSON:", text);
      }
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchArtists();
    const sock = io(`${API_URL}`);
    setSocket(sock);
    sock.on("artistsChanged", fetchArtists);

    return () => {
      sock.off("artistsChanged", fetchArtists);
      sock.close();
    };
  }, [fetchArtists, API_URL]);

  // re-filter whenever data or query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      const searchResults = fuzzySearch(artists, searchQuery, ['name', 'songs.title']);
      setFiltered(searchResults);
    } else {
      setFiltered(artists);
    }
  }, [artists, searchQuery]);

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          {searchQuery ? 'Search Results' : 'Artists'}
        </h1>
                
        {filtered.length === 0 ? (
          <p className="text-center py-12 text-muted-foreground">
            {searchQuery
               ? "No artists or songs found matching your search."
               : "No artists available."}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((artist, index) => (
              <ArtistCard key={`artist-${index}-${artist.name}`} artist={artist} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Index;
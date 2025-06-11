
import { useEffect, useState, useCallback } from "react";
import { Layout } from "@/components/Layout";
import { ArtistCard } from "@/components/ArtistCard";
import { Artist } from "@/types";
import { fuzzySearch } from "@/lib/utils";
import { useChordVerseStore } from "@/lib/store";
import { io, Socket } from "socket.io-client";
// import chordsData from "@/data/chordsData.json";
// import music from "@/data/artists.json"

function Index() {
  const { searchQuery } = useChordVerseStore();
  const [artists, setArtists] = useState<Artist[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  // const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);
  const [filtered, setFiltered] = useState<Artist[]>([]);
  
  // useEffect(() => {
  //   const artists = music.artists as unknown as Artist[];
    
  //   if (searchQuery && searchQuery.trim() !== '') {
  //     const results = fuzzySearch(artists, searchQuery, ['name', 'songs.title']);
  //     setFilteredArtists(results);
  //   } else {
  //     setFilteredArtists(artists);
  //   }
  // }, [searchQuery]);

  const fetchArtists = useCallback(async () => {
    try {
      const res = await fetch('https://guitar-backend-xf0q.onrender.com/api/artists');
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
      const data: Artist[] = await res.json();
      console.log("fetched artists:", data);
      setArtists(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  // initial load + live updates
  useEffect(() => {
    fetchArtists();

    const sock = io();
    setSocket(sock);
    sock.on('artistsChanged', () => {
      // refetch or merge the specific change
      fetchArtists();
    });

    return () => {
      sock.off('artistsChanged');
      sock.close();
    };
  }, [fetchArtists]);

  // re-filter whenever data or query changes
  useEffect(() => {
    if (searchQuery.trim()) {
      setFiltered(fuzzySearch(artists, searchQuery, ['name', 'songs.title']));
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
        
        {/* {filteredArtists.length === 0 ? ( */}
        {filtered.length === 0 ? (
          <p className="text-center py-12 text-muted-foreground">
            {searchQuery 
              ? "No artists or songs found matching your search." 
              : "No artists available."}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* {filteredArtists.map((artist) => ( */}
            {filtered.map((artist) => (
              <ArtistCard key={artist.name} artist={artist} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Index;

import { useEffect, useState, useCallback } from "react";
import { Layout } from "@/components/Layout";
import { ArtistCard } from "@/components/ArtistCard";
import { Artist } from "@/types";
import { useChordVerseStore } from "@/lib/store";
import { io, Socket } from "socket.io-client";
import { PaginationComponent } from "@/components/Pagination";

function Index() {
  const { searchQuery } = useChordVerseStore();
  const [artists, setArtists] = useState<Artist[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [totalArtists, setTotalArtists] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [artistsPerPage] = useState(20); // Number of artists per page

  const VITE_API_URL = import.meta.env.VITE_API_URL;

  const fetchArtists = useCallback(async () => {
    try {
      const res = await fetch(
        `${VITE_API_URL}/api/artists?page=${currentPage}&limit=${artistsPerPage}&search=${encodeURIComponent(searchQuery)}`
      );
      const data = await res.json();
      console.log("Fetched artists for first:", data);

      setArtists(data.artists);
      setTotalArtists(data.total);
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  }, [VITE_API_URL, currentPage, artistsPerPage, searchQuery]);

  useEffect(() => {
    fetchArtists();
    const sock = io(`${VITE_API_URL}`);
    setSocket(sock);
    sock.on("artistsChanged", fetchArtists);

    return () => {
      sock.off("artistsChanged", fetchArtists);
      sock.close();
    };
  }, [fetchArtists, VITE_API_URL]);

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          {searchQuery ? "Search Results" : "Artists"}
        </h1>

        {artists.length === 0 ? (
          <p className="text-center py-12 text-muted-foreground">
            {searchQuery
              ? "No artists or songs found matching your search."
              : "No artists available."}
          </p>
        ) : (
          <>
            {/* Only render artists from current backend page */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {artists.map((artist, index) => (
                <ArtistCard
                  key={`artist-${index}-${artist.name}`}
                  artist={artist}
                />
              ))}
            </div>

            <div className="col-span-full flex justify-center mt-4">
              <PaginationComponent
                totalArtists={totalArtists}
                artistPerPage={artistsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Index;

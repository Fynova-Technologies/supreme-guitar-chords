// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Layout } from "@/components/Layout";
// import { SongCard } from "@/components/SongCard";
// import { Artist, Song } from "@/types";
// import { fuzzySearch } from "@/lib/utils";
// import { useChordVerseStore } from "@/lib/store";

// function ArtistPage() {
//   const { artist } = useParams<{ artist: string }>();
//   const { searchQuery } = useChordVerseStore();
//   const [artistData, setArtistData] = useState<Artist | null>(null);
//   const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const VITE_API_URL = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     async function fetchArtist() {
//       if (!artist) {
//         setLoading(false);
//         return;
//       }

//       setLoading(true);
//       setError(null);

//       try {
//         const artistName = decodeURIComponent(artist);
//         console.log('Frontend: Fetching artist:', artistName);
        
//         // 🚀 OPTIMIZED: Fetch only this artist's data
//         const res = await fetch(
//           `${VITE_API_URL}/api/artists/single?name=${encodeURIComponent(artistName)}`
//         );
        
//         if (!res.ok) {
//           if (res.status === 404) {
//             setError("Artist not found");
//           } else if (res.status === 400) {
//             setError("Invalid request");
//           } else {
//             setError("Failed to fetch artist data");
//           }
//           setArtistData(null);
//           setFilteredSongs([]);
//           return;
//         }

//         const data = await res.json();
//         console.log('Frontend: Received artist data:', data);
        
//         setArtistData(data);

//         // Apply search filter if needed
//         const songsToShow = searchQuery?.trim()
//           ? fuzzySearch(data.songs, searchQuery, ["title"])
//           : data.songs;

//         setFilteredSongs(songsToShow);
//       } catch (error) {
//         console.error("Failed to fetch artist:", error);
//         setError("Network error occurred");
//         setArtistData(null);
//         setFilteredSongs([]);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArtist();
//   }, [artist, searchQuery, VITE_API_URL]);

//   // Loading state
//   if (loading) {
//     return (
//       <Layout>
//         <div className="flex items-center justify-center h-[50vh]">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
//             <p className="text-lg text-muted-foreground">Loading artist...</p>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   // Error or not found state
//   if (error || !artistData) {
//     return (
//       <Layout>
//         <div className="flex items-center justify-center h-[50vh]">
//           <div className="text-center">
//             <p className="text-lg text-muted-foreground mb-4">
//               {error || "Artist not found"}
//             </p>
//             <button 
//               onClick={() => window.history.back()} 
//               className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
//             >
//               Go Back
//             </button>
//           </div>
//         </div>
//       </Layout>
//     );
//   }

//   // Success state
//   return (
//     <Layout>
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <h1 className="text-3xl font-bold">{artistData.name}</h1>
//           <div className="text-sm text-muted-foreground">
//             {searchQuery && filteredSongs.length !== artistData.songs.length ? (
//               <span>{filteredSongs.length} of {artistData.songs.length} songs</span>
//             ) : (
//               <span>{artistData.songs.length} songs</span>
//             )}
//           </div>
//         </div>

//         {filteredSongs.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-lg text-muted-foreground mb-4">
//               {searchQuery
//                 ? `No songs found matching "${searchQuery}"`
//                 : "No songs available for this artist"}
//             </p>
//             {searchQuery && (
//               <button 
//                 onClick={() => window.location.reload()} 
//                 className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
//               >
//                 Clear Search
//               </button>
//             )}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {filteredSongs.map((song, index) => (
//               <SongCard
//                 key={song._id || `${song.title}-${index}`}
//                 song={song}
//                 artistName={artistData.name}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// }

// export default ArtistPage;



import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchArtist() {
      if (!artist) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const artistName = decodeURIComponent(artist);
        console.log('Frontend: Fetching artist:', artistName);
        
        const res = await fetch(
          `${VITE_API_URL}/api/artists/single?name=${encodeURIComponent(artistName)}`
        );
        
        console.log('Frontend: Response status:', res.status);
        
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          console.log('Frontend: Error response:', errorData);
          
          if (res.status === 404) {
            setError("Artist not found");
          } else if (res.status === 400) {
            setError("Invalid request");
          } else {
            setError(errorData.error || "Failed to fetch artist data");
          }
          setArtistData(null);
          setFilteredSongs([]);
          return;
        }

        const data = await res.json();
        console.log('Frontend: Received artist:', data.name, 'with', data.songs?.length || 0, 'songs');
        
        setArtistData(data);

        // Apply search filter if needed
        const songs = data.songs || [];
        const songsToShow = searchQuery?.trim()
          ? fuzzySearch(songs, searchQuery, ["title"])
          : songs;

        setFilteredSongs(songsToShow);
      } catch (error) {
        console.error("Frontend: Network error:", error);
        setError("Network error occurred");
        setArtistData(null);
        setFilteredSongs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchArtist();
  }, [artist, searchQuery, VITE_API_URL]);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">Loading artist...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !artistData) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-[50vh]">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">
              {error || "Artist not found"}
            </p>
            <button 
              onClick={() => window.history.back()} 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Go Back
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const totalSongs = artistData.songs?.length || 0;

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{artistData.name}</h1>
          <div className="text-sm text-muted-foreground">
            {searchQuery && filteredSongs.length !== totalSongs ? (
              <span>{filteredSongs.length} of {totalSongs} songs</span>
            ) : (
              <span>{totalSongs} songs</span>
            )}
          </div>
        </div>

        {filteredSongs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              {searchQuery
                ? `No songs found matching "${searchQuery}"`
                : "No songs available for this artist"}
            </p>
            {searchQuery && (
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
              >
                Show All Songs
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSongs.map((song, index) => (
              <SongCard
                key={song.title + index} // Use title + index since there might not be song._id
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
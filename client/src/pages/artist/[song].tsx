// import { useEffect, useRef, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Layout } from "@/components/Layout";
// import { ChordDisplay } from "@/components/ChordDisplay";
// import { ChordControls } from "@/components/ChordControls";
// import { Song } from "@/types";

// function SongPage() {
//   const { artist, song } = useParams<{ artist: string; song: string }>();
//   const navigate = useNavigate();
//   const [songData, setSongData] = useState<{
//     song: Song;
//     artistName: string;
//   } | null>(null);
//   const chordsRef = useRef<HTMLDivElement>(null);
//   const VITE_API_URL = import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     async function fetchSong() {
//       if (!artist || !song) return;

//       const decodedArtist = decodeURIComponent(artist);
//       const decodedSong = decodeURIComponent(song);

//       try {
//         // Fetch the specific song only
//         const res = await fetch(
//           `${VITE_API_URL}/api/artists/song?artist=${encodeURIComponent(
//             decodedArtist
//           )}&title=${encodeURIComponent(decodedSong)}`
//         );

//         if (!res.ok) {
//           // If not found, redirect
//           navigate(`/artist/${encodeURIComponent(decodedArtist)}`);
//           return;
//         }

//         const data = await res.json();
//         setSongData({ song: data, artistName: decodedArtist });

//         document.title = `${data.title} by ${decodedArtist} | chordVerse`;
//       } catch (err) {
//         console.error("Error fetching song:", err);
//         navigate(`/artist/${encodeURIComponent(decodedArtist)}`);
//       }
//     }

//     fetchSong();
//   }, [artist, song, navigate, VITE_API_URL]);

//   if (!songData) {
//     return (
//       <Layout>
//         <div className="flex items-center justify-center h-[50vh]">
//           <p className="text-lg text-muted-foreground">Loading song...</p>
//         </div>
//       </Layout>
//     );
//   }

//   const { song: songDetails, artistName } = songData;

//   return (
//     <Layout>
//       <div className="space-y-6">
//         <div>
//           <h1 className="text-3xl font-bold">{songDetails.title}</h1>
//           <p className="text-lg text-muted-foreground">by {artistName}</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="md:col-span-3 order-2 md:order-1">
//             <div className="min-h-[70vh] bg-card/50 rounded-lg shadow-sm">
//               <ChordDisplay
//                 ref={chordsRef}
//                 chordsText={songDetails.lyrics_chords}
//                 originalKey={songDetails.key}
//               />
//             </div>
//           </div>

//           <div className="md:col-span-1 order-1 md:order-2">
//             <ChordControls
//               chordsRef={chordsRef}
//               artistName={artistName}
//               songTitle={songDetails.title}
//               chordsText={songDetails.lyrics_chords}
//             />
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default SongPage;



// Updated SongPage.tsx - Fix the props mapping
import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ChordDisplay } from "@/components/ChordDisplay";
import { ChordControls } from "@/components/ChordControls";
import { Song } from "@/types";

function SongPage() {
  const { artist, song } = useParams<{ artist: string; song: string }>();
  const navigate = useNavigate();
  const [songData, setSongData] = useState<{
    song: Song;
    artistName: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const chordsRef = useRef<HTMLDivElement>(null);
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchSong() {
      if (!artist || !song) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      const decodedArtist = decodeURIComponent(artist);
      const decodedSong = decodeURIComponent(song);

      try {
        console.log('Fetching song:', decodedSong, 'by', decodedArtist);

        const res = await fetch(
          `${VITE_API_URL}/api/artists/song?artist=${encodeURIComponent(
            decodedArtist
          )}&title=${encodeURIComponent(decodedSong)}`
        );

        console.log('Response status:', res.status);

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          console.log('Error response:', errorData);
          
          if (res.status === 404) {
            setError("Song not found");
          } else {
            setError(errorData.error || "Failed to fetch song");
          }
          return;
        }

        const data = await res.json();
        console.log('Song data received:', data);
        
        // Debug the actual data structure
        console.log('Song fields:', Object.keys(data));
        console.log('Has chords field:', !!data.chords);
        console.log('Has lyrics_chords field:', !!data.lyrics_chords);
        console.log('Chords content preview:', data.chords ? data.chords.substring(0, 100) : 'No chords field');
        console.log('Raw chords data:', data.chords);
        
        setSongData({ song: data, artistName: decodedArtist });
        document.title = `${data.title} by ${decodedArtist} | chordVerse`;

      } catch (err) {
        console.error("Network error fetching song:", err);
        setError("Network error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchSong();
  }, [artist, song, VITE_API_URL]);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">Loading song...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !songData) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-[50vh]">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">
              {error || "Song not found"}
            </p>
            <div className="space-x-4">
              <button 
                onClick={() => navigate(`/artist/${encodeURIComponent(artist || '')}`)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Back to Artist
              </button>
              <button 
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const { song: songDetails, artistName } = songData;

  // Get the chords text - try different field names
  const chordsText = songDetails.chords || 
                    songDetails.lyrics_chords || 
                    songDetails.chord_lyrics || 
                    songDetails.lyrics || 
                    '';

  console.log('=== CHORD DATA DEBUG ===');
  console.log('songDetails.chords:', songDetails.chords);
  console.log('chordsText result:', chordsText);
  console.log('chordsText type:', typeof chordsText);
  console.log('chordsText length:', chordsText.length);
  console.log('=== END DEBUG ===');

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">{songDetails.title}</h1>
            <p className="text-lg text-muted-foreground">by {artistName}</p>
          </div>
          <button 
            onClick={() => navigate(`/artist/${encodeURIComponent(artistName)}`)}
            className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
          >
            Back to Artist
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="min-h-[70vh] bg-card/50 rounded-lg shadow-sm">
              <ChordDisplay
                ref={chordsRef}
                chordsText={chordsText}  // This should now have the correct data
                originalKey={songDetails.key || 'C'}
              />
            </div>
          </div>

          <div className="md:col-span-1 order-1 md:order-2">
            <ChordControls
              chordsRef={chordsRef}
              artistName={artistName}
              songTitle={songDetails.title}
              chordsText={chordsText}  // Pass the same data here
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SongPage;

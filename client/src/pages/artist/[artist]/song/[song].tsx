import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ChordDisplay } from "@/components/ChordDisplay";
import { ChordControls } from "@/components/ChordControls";
import { Artist, Song } from "@/types";

function SongPage() {
  const { artist, song } = useParams<{ artist: string; song: string }>();
  const navigate = useNavigate();
  const [songData, setSongData] = useState<{song: Song, artistName: string} | null>(null);
  const chordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchLyrics() {
      if(!artist || !song) return;

      const decodedArtist = decodeURIComponent(artist);
      const decodedSong = decodeURIComponent(song);

      try{
        const res = await fetch('http://localhost:8080/api/artists');
        const songsData = await res.json();

        // Group songs by artist name (same logic as other components)
        const artistsMap = new Map();
        let artistCounter = 0;
        
        songsData.forEach((songItem: any) => {
          const artistName = songItem.artist;
          // Skip if artistName is undefined/null
          if (!artistName) {
            return;
          }
          
          if (!artistsMap.has(artistName)) {
            artistsMap.set(artistName, {
              _id: `artist-${artistCounter++}`,
              name: artistName,
              songs: []
            });
          }
          artistsMap.get(artistName).songs.push(songItem);
        });

        const groupedArtists = Array.from(artistsMap.values());

        // Find the artist
        const foundArtist = groupedArtists.find(
          a => a.name.toLowerCase() === decodedArtist.toLowerCase()
        );

        if(foundArtist) {
          const foundSong = foundArtist.songs.find(
            s => s.title.toLowerCase() === decodedSong.toLowerCase()
          );

          if (foundSong) {
            setSongData({
              song: foundSong,
              artistName: foundArtist.name,
            });
            // set document title for better UX
            document.title = `${foundSong.title} by ${foundArtist.name} | chordVerse`;
          }else {
            navigate(`/artist/${encodeURIComponent(decodedArtist)}`)
            console.log('song not found');
          }
        }else{
          navigate('/');
          console.log('artist not found');
        }
      }catch (err) {
        console.log('Error fetching lyrics with chords:', err);
      }
    }
    fetchLyrics();
  },[artist, song, navigate]);

  if (!songData) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-[50vh]">
          <p className="text-lg text-muted-foreground">Loading song...</p>
        </div>
      </Layout>
    );
  }

  const { song: songDetails, artistName } = songData;

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{songDetails.title}</h1>
          <p className="text-lg text-muted-foreground">by {artistName}</p>
        </div>
                
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="min-h-[70vh] bg-card/50 rounded-lg shadow-sm">
              <ChordDisplay
                 ref={chordsRef}
                chordsText={songDetails.lyrics_chords}
                 originalKey={songDetails.key}
               />
            </div>
          </div>
                     
          <div className="md:col-span-1 order-1 md:order-2">
            <ChordControls
              chordsRef={chordsRef}
              artistName={artistName}
              songTitle={songDetails.title}
              chordsText={songDetails.lyrics_chords}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SongPage;
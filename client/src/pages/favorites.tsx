
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { SongCard } from "@/components/SongCard";
import { Artist } from "@/types";
import { useChordVerseStore } from "@/lib/store";
// import chordsData from "@/data/chordsData.json";
// import music from "@/data/artists.json"
import { useParams } from "react-router-dom";

function FavoritesPage() {
  const { favorites } = useChordVerseStore();
  const [favoriteSongs, setFavoriteSongs] = useState<{song: any, artistName: string}[]>([]);
  
  // useEffect(() => {
  //   const artists = music.artists as unknown as Artist[];
  //   const songs = favorites.map(fav => {
  //     const artist = artists.find(a => a.name === fav.artistName);
  //     const song = artist?.songs.find(s => s.title === fav.songTitle);
      
  //     if (artist && song) {
  //       return { song, artistName: artist.name };
  //     }
  //     return null;
  //   }).filter(Boolean) as {song: any, artistName: string}[];
    
  //   setFavoriteSongs(songs);
  // }, [favorites]);

//   useEffect (() => { async function fetchFavorites() {

//     try{
//       const res = await fetch("/api/artists")
//       console.log('data:', res);
//       const data = await res.json();
//       const artists = (data.artists as Artist[]);

//       // map favorites to full song data
//         const songs = favorites
//         .map(fav => {
//             console.log("favorite data from chordverser:", favorites)
//             const artist = artists.find(a => a.name.toLowerCase() === fav.artistName.toLowerCase());
//             const song = artist?.songs.find(s => s.title === fav.songTitle);
//             return artist && song
//               ? { song, artistName: artist.name }
//               : null;
//           })
//           .filter((x): x is { song: any; artistName: string } => x !== null);

//       setFavoriteSongs(songs);

//     }catch (err) {
//       console.log('Error fetching favourites: ', err);
//     }
//   }
//   fetchFavorites();
// }, [favorites]);

useEffect(() => {
  async function fetchFavorites() {
    try {
      const res = await fetch("/api/artists");
      const payload = await res.json();
      
      // payload might be either Artist[] or { artists: Artist[] }
      const artists: Artist[] = Array.isArray(payload)
        ? payload
        : Array.isArray(payload.artists)
          ? payload.artists
          : [];

      if (!artists.length) {
        console.error("No artist data available", payload);
        setFavoriteSongs([]);
        return;
      }

      const songs = favorites
        .map(fav => {
          const art = artists.find(a => a.name === fav.artistName);
          const song = art?.songs.find(s => s.title === fav.songTitle);
          return art && song ? { song, artistName: art.name } : null;
        })
        .filter((x): x is { song: any; artistName: string } => !!x);

      setFavoriteSongs(songs);
    } catch (err) {
      console.error("Error fetching favorites:", err);
    }
  }

  fetchFavorites();
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

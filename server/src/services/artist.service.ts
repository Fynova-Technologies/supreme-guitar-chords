// import { ObjectId } from "mongodb";
// import { ArtistsCollection } from "../db/collections.js";
// import { ArtistDoc, SongSubdoc } from "../models/artist.js";

// export async function getPaginatedArtists(
//   page: number, 
//   limit: number, 
//   searchQuery?: string
// ) {
//   const skip = (page - 1) * limit;
  
//   const matchStage: any = {};
//   if (searchQuery?.trim()) {
//     matchStage.$or = [
//       { artist: { $regex: searchQuery, $options: "i" } },
//       { title: { $regex: searchQuery, $options: "i" } }
//     ];
//   }

//   const pipeline: any[] = [];
//   if (Object.keys(matchStage).length > 0) {
//     pipeline.push({ $match: matchStage });
//   }
  
//   pipeline.push(
//     {
//       $group: {
//         _id: "$artist",
//         name: { $first: "$artist" },
//         songCount: { $sum: 1 },
//         songs: { $push: "$$ROOT" }
//       },
//     },
//     { $sort: { name: 1 } },
//     { $skip: skip },
//     { $limit: limit }
//   );

//   const artists = await ArtistsCollection.aggregate(pipeline).toArray();

//   // Count total artists
//   const countPipeline: any[] = [];
//   if (Object.keys(matchStage).length > 0) {
//     countPipeline.push({ $match: matchStage });
//   }
//   countPipeline.push(
//     { $group: { _id: "$artist" } },
//     { $count: "total" }
//   );

//   const countResult = await ArtistsCollection.aggregate(countPipeline).toArray();
//   const total = countResult.length > 0 ? countResult[0].total : 0;

//   return { artists, total };
// }

// // Get single artist by name with songs
// export async function getSingleArtist(artistName: string) {
//   try {
//     console.log('Service: Looking for artist:', artistName);
    
//     // Use aggregation pipeline for better performance
//     const pipeline = [
//       {
//         $match: {
//           artist: { 
//             $regex: `^${artistName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 
//             $options: "i" 
//           }
//         }
//       },
//       {
//         $group: {
//           _id: "$artist",
//           name: { $first: "$artist" },
//           songs: { $push: "$$ROOT" },
//           songCount: { $sum: 1 }
//         }
//       }
//     ];
    
//     const result = await ArtistsCollection.aggregate(pipeline).toArray();
    
//     if (result.length === 0) {
//       return null;
//     }
    
//     return result[0];
//   } catch (error) {
//     console.error('Service error:', error);
//     return null;
//   }
// }

// // Cache frequently accessed artists
// const artistCache = new Map<string, { data: any; timestamp: number }>();
// const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// export async function getSingleArtistCached(artistName: string) {
//   const cacheKey = artistName.toLowerCase();
//   const cached = artistCache.get(cacheKey);
  
//   // Return cached data if it's still valid
//   if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
//     console.log('Returning cached data for:', artistName);
//     return cached.data;
//   }
  
//   // Fetch fresh data
//   const artist = await getSingleArtist(artistName);
  
//   // Cache the result
//   if (artist) {
//     artistCache.set(cacheKey, {
//       data: artist,
//       timestamp: Date.now()
//     });
//   }
  
//   return artist;
// }

// export async function getArtistById(id: string): Promise<ArtistDoc | null> {
//   return ArtistsCollection.findOne({ _id: new ObjectId(id) } as any);
// }

// export async function createArtist(artist: Pick<ArtistDoc, "name" | "songs">): Promise<any> {
//   const res = await ArtistsCollection.insertOne({ ...artist, artist:artist.name, songs: artist.songs || [] });
//   return res;
// }

// export async function addSongToArtist(artistId: string, song: SongSubdoc) {
//   const res = await ArtistsCollection.updateOne(
//     { _id: new ObjectId(artistId) } as any,
//     { $push: { songs: { ...song, _id: new ObjectId() } } }
//   );
//   return res;
// }

// export async function getSongByArtistAndTitle(
//   artistName: string,
//   songTitle: string
// ): Promise<any | null> {
//   try {
//     console.log('Service: Looking for song:', songTitle, 'by artist:', artistName);
    
//     // Based on your getPaginatedArtists function, it seems like each document 
//     // is a song with artist and title fields, not nested structure
//     const song = await ArtistsCollection.findOne({
//       artist: { 
//         $regex: `^${artistName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 
//         $options: "i" 
//       },
//       title: { 
//         $regex: `^${songTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 
//         $options: "i" 
//       }
//     });

//     if (song) {
//       console.log('Song found:', song.title, 'by', song.artist);
//       return song;
//     }
    
//     console.log('Song not found');
//     return null;
//   } catch (err) {
//     console.error("getSongByArtistAndTitle error:", err);
//     return null;
//   }
// }



import { ObjectId } from "mongodb";
import { ArtistsCollection } from "../db/collections.js";
import { ArtistDoc, SongSubdoc } from "../models/artist.js";

export async function getPaginatedArtists(
  page: number, 
  limit: number, 
  searchQuery?: string
) {
  const skip = (page - 1) * limit;
  
  // Build match conditions for search
  const matchConditions: any = {};
  
  if (searchQuery?.trim()) {
    matchConditions.$or = [
      { name: { $regex: searchQuery, $options: "i" } },
      { "songs.title": { $regex: searchQuery, $options: "i" } }
    ];
  }

  // Get artists with pagination
  const artists = await ArtistsCollection
    .find(matchConditions)
    .sort({ name: 1 })
    .skip(skip)
    .limit(limit)
    .toArray();

  // Count total artists
  const total = await ArtistsCollection.countDocuments(matchConditions);

  return { artists, total };
}

// Get single artist by name - OPTIMIZED for your structure
export async function getSingleArtist(artistName: string) {
  try {
    console.log('Service: Looking for artist:', artistName);
    
    // Direct lookup by name field (much faster than aggregation)
    let artist = await ArtistsCollection.findOne({ 
      name: artistName 
    });
    
    // If no exact match, try case-insensitive
    if (!artist) {
      artist = await ArtistsCollection.findOne({ 
        name: { $regex: `^${artistName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, $options: "i" } 
      });
    }
    
    if (!artist) {
      console.log('Service: Artist not found:', artistName);
      return null;
    }
    
    console.log('Service: Found artist with', artist.songs?.length || 0, 'songs');
    return artist;
    
  } catch (error) {
    console.error('Service error:', error);
    return null;
  }
}

export async function getArtistById(id: string): Promise<ArtistDoc | null> {
  return ArtistsCollection.findOne({ _id: new ObjectId(id) } as any);
}

export async function createArtist(artist: Pick<ArtistDoc, "name" | "songs">): Promise<any> {
  const res = await ArtistsCollection.insertOne({ ...artist, artist:artist.name, songs: artist.songs || [] });
  return res;
}

export async function addSongToArtist(artistId: string, song: SongSubdoc) {
  const res = await ArtistsCollection.updateOne(
    { _id: new ObjectId(artistId) } as any,
    { $push: { songs: { ...song, _id: new ObjectId() } } }
  );
  return res;
}


// Updated getSongByArtistAndTitle with better debugging
export async function getSongByArtistAndTitle(
  artistName: string,
  songTitle: string
): Promise<any | null> {
  try {
    console.log('=== SERVICE DEBUG ===');
    console.log('Service: Looking for song:', songTitle, 'by artist:', artistName);

    // Find the artist document (based on your structure)
    const artist = await ArtistsCollection.findOne({
      name: { $regex: `^${artistName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, $options: "i" }
    });

    if (!artist) {
      console.log('Artist not found:', artistName);
      return null;
    }

    console.log('Found artist:', artist.name, 'with', artist.songs?.length || 0, 'songs');
    console.log('Artist structure:', {
      _id: artist._id,
      name: artist.name,
      hasSongs: !!artist.songs,
      songsLength: artist.songs?.length || 0
    });

    // Find the song in the artist's songs array
    if (artist.songs && Array.isArray(artist.songs)) {
      console.log('Searching in songs array...');
      
      const song = artist.songs.find((s: any, index: number) => {
        console.log(`Checking song ${index}:`, {
          title: s.title,
          hasChords: !!s.chords,
          chordsLength: s.chords?.length || 0,
          chordsPreview: s.chords ? s.chords.substring(0, 50) + '...' : 'No chords'
        });
        
        if (!s.title) return false;
        
        // Try exact match first
        if (s.title === songTitle) {
          console.log('Found exact title match!');
          return true;
        }
        
        // Try case-insensitive match
        if (s.title.toLowerCase() === songTitle.toLowerCase()) {
          console.log('Found case-insensitive title match!');
          return true;
        }
        
        return false;
      });

      if (song) {
        console.log('=== FOUND SONG ===');
        console.log('Song title:', song.title);
        console.log('Song fields:', Object.keys(song));
        console.log('Has chords field:', !!song.chords);
        console.log('Chords content type:', typeof song.chords);
        console.log('Chords content length:', song.chords?.length || 0);
        console.log('Chords preview:', song.chords ? song.chords.substring(0, 100) : 'No chords');
        console.log('Raw song object:', JSON.stringify(song, null, 2));
        console.log('=== END FOUND SONG ===');
        
        return song;
      }
    }

    console.log('Song not found in artist songs array');
    console.log('Available songs:', artist.songs?.map((s: any, i: number) => `${i}: "${s.title}"`) || []);
    return null;

  } catch (err) {
    console.error("getSongByArtistAndTitle error:", err);
    return null;
  }
}
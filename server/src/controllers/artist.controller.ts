
// import { RequestHandler } from "express";
// import * as artistService from "../services/artist.service.js";

// // GET /api/artists (with pagination and search)
// export const getArtists: RequestHandler = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page as string) || 1;
//     const limit = parseInt(req.query.limit as string) || 20;
//     const search = req.query.search as string;

//     // Add response caching headers
//     res.set('Cache-Control', 'public, max-age=300'); // 5 minutes cache

//     const { artists, total } = await artistService.getPaginatedArtists(page, limit, search);
    
//     // Add performance timing header
//     res.set('X-Response-Time', `${Date.now()}`);
    
//     res.json({ artists, total });
//   } catch (err) {
//     console.error("getPaginatedArtists error:", err);
//     res.status(500).json({ error: "Failed to fetch artists" });
//   }
// };

// // GET /api/artists/single?name=artistName (single artist lookup)
// export const getSingleArtist: RequestHandler = async (req, res) => {
//   try {
//     const startTime = Date.now();
//     const artistName = req.query.name as string;
    
//     if (!artistName) {
//       res.status(400).json({ error: "Artist name is required" });
//       return;
//     }

//     console.log('Controller: Looking for artist:', artistName);
    
//     // Use cached version for better performance
//     const artist = await artistService.getSingleArtistCached(artistName);
    
//     if (!artist) {
//       res.status(404).json({ error: "Artist not found" });
//       return;
//     }
    
//     // Add performance headers
//     const responseTime = Date.now() - startTime;
//     res.set('X-Response-Time', `${responseTime}ms`);
//     res.set('Cache-Control', 'public, max-age=300'); // 5 minutes cache
    
//     console.log(`Artist fetch completed in ${responseTime}ms`);
    
//     res.json(artist);
//   } catch (err) {
//     console.error("getSingleArtist error:", err);
//     res.status(500).json({ error: "Failed to fetch artist" });
//   }
// };

// // POST /api/artists
// export const createArtist: RequestHandler = async (req, res) => {
//   try {
//     const { name, songs } = req.body;
//     if (!name) {
//       res.status(400).json({ error: "artist name required" });
//       return;
//     }
//     const result = await artistService.createArtist({ name, songs });
//     res.status(201).json({ insertedId: result.insertedId });
//   } catch (err) {
//     console.error("createArtist error", err);
//     res.status(500).json({ error: "Failed to create artist" });
//   }
// };

// export const getSongByArtistAndSongId: RequestHandler = async (req, res) => {
//   try {
//     console.log('=== Song Request Debug ===');
//     console.log('Method:', req.method);
//     console.log('URL:', req.url);
//     console.log('Query params:', req.query);
//     console.log('========================');

//     // Change this line - use 'artist' and 'title' (not 'artistName')
//     const { artist, title } = req.query;
    
//     if (!artist || !title) {
//       console.log('Missing parameters - artist:', artist, 'title:', title);
//       res.status(400).json({ error: "artist name and song title required" });
//       return;
//     }

//     console.log('Searching for:', { artist, title });
    
//     // Pass the correct parameters
//     const result = await artistService.getSongByArtistAndTitle(artist as string, title as string);
    
//     if (!result) {
//       console.log('Song not found in database');
//       res.status(404).json({ error: "Song not found" });
//       return;
//     }
    
//     console.log('Song found, returning:', result.title);
//     res.json(result);
//   } catch (err) {
//     console.error("getSongByArtistAndSongId error", err);
//     res.status(500).json({ error: "Failed to fetch song" });
//   }
// }




import { RequestHandler } from "express";
import * as artistService from "../services/artist.service.js";

// GET /api/artists (with pagination and search)
export const getArtists: RequestHandler = async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const search = req.query.search as string;

    // Add response caching headers
    res.set('Cache-Control', 'public, max-age=300'); // 5 minutes cache

    const { artists, total } = await artistService.getPaginatedArtists(page, limit, search);
    
    // Add performance timing header
    res.set('X-Response-Time', `${Date.now()}`);
    
    res.json({ artists, total });
  } catch (err) {
    console.error("getPaginatedArtists error:", err);
    res.status(500).json({ error: "Failed to fetch artists" });
  }
};

export const getSingleArtist: RequestHandler = async (req, res) => {
  try {
    const artistName = req.query.name as string;
    
    if (!artistName) {
      res.status(400).json({ error: "Artist name is required" });
      return;
    }

    console.log('Controller: Looking for single artist:', artistName);
    const artist = await artistService.getSingleArtist(artistName);
    
    if (!artist) {
      console.log('Controller: Artist not found');
      res.status(404).json({ error: "Artist not found" });
      return;
    }
    
    console.log('Controller: Returning artist with', artist.songs?.length || 0, 'songs');
    res.json(artist);
  } catch (err) {
    console.error("getSingleArtist error:", err);
    res.status(500).json({ error: "Failed to fetch artist" });
  }
};

// POST /api/artists
export const createArtist: RequestHandler = async (req, res) => {
  try {
    const { name, songs } = req.body;
    if (!name) {
      res.status(400).json({ error: "artist name required" });
      return;
    }
    const result = await artistService.createArtist({ name, songs });
    res.status(201).json({ insertedId: result.insertedId });
  } catch (err) {
    console.error("createArtist error", err);
    res.status(500).json({ error: "Failed to create artist" });
  }
};


// Health check endpoint to monitor performance
export const healthCheck: RequestHandler = async (req, res) => {
  try {
    const startTime = Date.now();
    
    // Simple DB ping
    await artistService.getPaginatedArtists(1, 1);
    
    const dbResponseTime = Date.now() - startTime;
    
    res.json({
      status: 'healthy',
      database: {
        connected: true,
        responseTime: `${dbResponseTime}ms`
      },
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({
      status: 'unhealthy',
      error: 'Database connection failed',
      timestamp: new Date().toISOString()
    });
  }
};

export const getSongByArtistAndTitle: RequestHandler = async (req, res) => {
  try {
    console.log('=== Song Request Debug ===');
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Query params:', req.query);
    console.log('========================');

    // Change this line - use 'artist' and 'title' (not 'artistName')
    const { artist, title } = req.query;
    
    if (!artist || !title) {
      console.log('Missing parameters - artist:', artist, 'title:', title);
      res.status(400).json({ error: "artist name and song title required" });
      return;
    }

    console.log('Searching for:', { artist, title });
    
    // Pass the correct parameters
    const result = await artistService.getSongByArtistAndTitle(artist as string, title as string);
    
    if (!result) {
      console.log('Song not found in database');
      res.status(404).json({ error: "Song not found" });
      return;
    }
    
    console.log('Song found, returning:', result.title);
    res.json(result);
  } catch (err) {
    console.error("getSongByArtistAndSongId error", err);
    res.status(500).json({ error: "Failed to fetch song" });
  }
}
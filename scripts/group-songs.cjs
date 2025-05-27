// scripts/group-songs.js
const fs = require('fs');
const path = require('path');

// 1. Load your flat songs.json
const songs = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, '../src/data/songs.json'),
    'utf-8'
  )
);

// 2. Group by the `artist` field
const artistsMap = songs.reduce((map, song) => {
  if (!map[song.artist]) {
    map[song.artist] = { name: song.artist, songs: [] };
  }
  const { artist, ...songData } = song;
  map[song.artist].songs.push(songData);
  return map;
}, {});

// 3. Convert to an array
const artists = Object.values(artistsMap);

// 4. Write out a new JSON file
fs.writeFileSync(
  path.resolve(__dirname, '../src/data/artists.json'),
  JSON.stringify({ artists }, null, 2),
  'utf-8'
);

console.log(`✅ Generated artists.json with ${artists.length} artists.`);

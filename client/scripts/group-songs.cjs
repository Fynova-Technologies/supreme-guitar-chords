
// const fs = require('fs');
// const path = require('path');

// // Load your flat songs.json
// const songs = JSON.parse(
//   fs.readFileSync(
//     path.resolve(__dirname, '../src/data/data.json'),
//     'utf-8'
//   )
// );

// // Group by the `artist` field
// const artistsMap = songs.reduce((map, song) => {
//   if (!map[song.artist]) {
//     map[song.artist] = { name: song.artist, songs: [] };
//   }
//   const { artist, ...songData } = song;
//   map[song.artist].songs.push(songData);
//   return map;
// }, {});

// // Convert to an array
// const artists = Object.values(artistsMap);

// // Write out a new JSON file
// fs.writeFileSync(
//   path.resolve(__dirname, '../src/data/songlyrics.json'),
//   JSON.stringify({ artists }, null, 2),
//   'utf-8'
// );

// console.log(`Generated artists.json with ${songlyrics.length} artists.`);





const fs = require('fs');
const path = require('path');
const readline = require('readline');
const crypto = require('crypto');

const INPUT = path.resolve(__dirname, '../src/data/data.json'); // adjust
const OUTPUT = path.resolve(__dirname, '../src/data/artists.json');
const TMP_DIR = path.resolve(__dirname, '../tmp_artists_ndjson');

if (!fs.existsSync(INPUT)) {
  console.error('Input not found:', INPUT);
  process.exit(1);
}
if (!fs.existsSync(TMP_DIR)) fs.mkdirSync(TMP_DIR, { recursive: true });

function slugify(s) {
  if (!s) s = 'unknown';
  const normalized = String(s)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9 _.\-()]/g, '')
    .trim()
    .replace(/\s+/g, '_')
    .slice(0, 150);
  return normalized || crypto.createHash('md5').update(String(s)).digest('hex');
}
function uniqueFilename(base, existing) {
  let name = base, i = 1;
  while (existing.has(name + '.ndjson')) {
    i++; name = `${base}_${i}`;
  }
  return name + '.ndjson';
}
function detectFormatSync(filepath) {
  const fd = fs.openSync(filepath, 'r');
  const buf = Buffer.alloc(1024);
  const bytes = fs.readSync(fd, buf, 0, buf.length, 0);
  fs.closeSync(fd);
  const head = buf.slice(0, bytes).toString('utf8').trimLeft();
  if (!head) return 'ndjson';
  if (head[0] === '[') return 'json-array';
  return 'ndjson';
}

(async function main(){
  console.log('Grouping songs by artist (merged chords+lyrics into lyrics_with_chords field)...');
  const artistStreams = new Map(); // key -> { ws, name, filename, path }
  const filenamesInTmp = new Set();
  let parsedCount = 0;
  const format = detectFormatSync(INPUT);

  function getArtistStream(artistNameRaw) {
    const artistName = (artistNameRaw || 'Unknown Artist') + '';
    const key = artistName.trim().toLowerCase() || 'unknown artist';
    if (artistStreams.has(key)) return artistStreams.get(key);
    const base = slugify(artistName);
    const fname = uniqueFilename(base, filenamesInTmp);
    filenamesInTmp.add(fname);
    const fullpath = path.join(TMP_DIR, fname);
    const ws = fs.createWriteStream(fullpath, { flags: 'a' });
    const obj = { ws, name: artistName.trim() || 'Unknown Artist', path: fullpath, filename: fname };
    artistStreams.set(key, obj);
    return obj;
  }

  function looksLikeTabOrSpam(chords) {
  if (!chords) return true;

  const lower = chords.toLowerCase();

  // Common tab / spam indicators
  if (lower.includes("hide this tab")) return true;
  if (lower.includes("solo")) return true;
  if (lower.includes("tablature")) return true;

  // Guitar ASCII tab patterns
  if (/e\|[-0-9hpb\/\\~]+/i.test(chords)) return true;
  if (/b\|[-0-9hpb\/\\~]+/i.test(chords)) return true;
  if (/g\|[-0-9hpb\/\\~]+/i.test(chords)) return true;

  // If more than 50% of content is symbols/numbers → likely not lyrics
  const symbols = (chords.match(/[-0-9hpb\/\\|]+/g) || []).join("").length;
  if (symbols / chords.length > 0.5) return true;

  return false;
}


function writeSongToArtist(artistNameRaw, obj) {
  // Extract title and chords/lyrics
  const title = obj.song_name || obj.title || obj.name || null;
  const chords =
    obj["chords&lyrics"] ||
    obj.chords_and_lyrics ||
    obj["chords & lyrics"] ||
    obj.chords ||
    obj.lyrics ||
    null;

  // 🔹 Filtering rules
  if (!title || title.length < 2) return;                   // skip if no/short title
  if (!chords || chords.length < 20) return;               // skip if lyrics/chords too short
  if (/test|sample|unknown/i.test(title)) return;          // skip spammy placeholder songs
  if (looksLikeTabOrSpam(chords)) return;                  // skip if looks like tab
  if (obj.popularity !== undefined && obj.popularity < 10) return; // skip unpopular
  if (!obj.genres || (Array.isArray(obj.genres) && obj.genres.length === 0)) return;

    // 🔹 Handle genres properly
  let genresArr = [];

  if (Array.isArray(obj.genres)) {
    genresArr = obj.genres.map((g) => g.toLowerCase());
  } else if (typeof obj.genres === "string") {
    try {
      // parse stringified array: "['English Pop', 'Rock']" or "[]"
      genresArr = JSON.parse(obj.genres.replace(/'/g, '"')).map((g) => g.toLowerCase());
    } catch {
      genresArr = obj.genres.split(",").map((g) => g.toLowerCase().trim()).filter(Boolean);
    }
  }

  // Skip if genres are empty
  if (!genresArr || genresArr.length === 0) return;

  // 🔹 Genre exclusion
  const bannedGenres = [
    "brazilian", "portuguese", "spanish", "latin", "mpb", "sertanejo", "rock nacional",
    "j-metal", "japanese post-hardcore", "oshare kei", "visual kei",
    "anime", "j-pop", "j-poprock", "vocaloid", "j-rock", "japanese teen pop",
    "k-pop", "k-pop girl group",
    "classic swedish pop", "swedish alternative rock", "swedish indie rock", "swedish pop",
    "musica triste brasileira",
    "ccm",
    "indie catala", "mestissatge", "musica catalana", "rap catala",
    "italian indie pop", "italian pop", "rome indie",
    "cologne hip hop", "german reggae", "reggae fusion",
    "chanson", "french pop", "french rock",
    "dutch hip hop", "dutch pop", "dutch rock",
    "classic italian pop", "italian adult pop", "mexican pop",
    "adult standards", "arkansas country", "brill building pop", "classic country pop",
    "folk", "folk rock", "lounge", "mellow gold", "nashville sound", "soft rock",
    "irish rock", "irish singer-songwriter", "melancholia",
    "indonesian jazz", "indonesian pop",
    "opm", "pinoy trap", "tagalog rap",
    "dance pop", "funk carioca", "pop", "pop lgbtq+ brasileira",
    "pagode", "pagode novo", "axe", "pagode baiano",
    "forro", "reggaeton flow", "rap espanol", "forro de favela",
    "korean instrumental", "neo-classical", "new age piano",
    "trap brasileiro", "emo rap", "miami hip hop",
    "salsa", "salsa puertorriquena", "tropical",
    "boogaloo", "deutsch disney", "dutch disney",
    "hip hop tuga", "trap tuga",
    "louvor", "medieval rock", "deep german hip hop", "german hip hop",
    "musica infantil", "nerdcore brasileiro", "cumbia sonidera", "ranchera", "regional mexican",
    "musica costena", "corrido", "corridos tumbados", "nuevo regional mexicano", "sierreno",
    "duranguense", "grupera", "modern reggae", "reggae", "roots reggae", "mexican indie", 
    "eurovision", "banda", "bristol indie", "modern alternative rock", "modern rock",
    "cantautor", "nueva cancion", "trova", "adoracao", "christian music", "neo mellow",
    "flamenco fusion", "uk drill", "indie triste", "cuarteto", "argentine rock", "cumbia",
    "trap argentino", "cumbia santafesina", "cumbia villera",
    "japanese vgm","batidao romantico","roots rock","vallenato",
    "indie quebecois","rock quebecois","classic finnish rock","iskelma","suomi rock",
    "classic schlager","schlager","downtempo","electronica","trip hop",
    "easy listening","musica rondoniense","cancion infantil mexicana","children's music","musica para ninos",
    "sleep","rap df","rap","slap house"
  ];
  const genresStr = (obj.genres || "").toLowerCase();
    if (
    bannedGenres.some((g) => genresStr.includes(g)) ||
    genresStr.includes("hip hop") ||
    genresStr.includes("rap") ||
    genresStr.includes("trap")
  ) return;

  // 🔹 Write song
  const s = getArtistStream(artistNameRaw);
  const songOut = {
    title,
    chords,
    artist_id: obj.artist_id || null,
    popularity: obj.popularity || null,
    genres: obj.genres || null,
  };

  s.ws.write(JSON.stringify(songOut) + "\n");
}

  if (format === 'ndjson') {
    const rl = readline.createInterface({ input: fs.createReadStream(INPUT), crlfDelay: Infinity });
    for await (const line of rl) {
      if (!line || !line.trim()) continue;
      let obj;
      try { obj = JSON.parse(line); } catch (e) {
        console.warn('Skipping non-JSON line.');
        continue;
      }
      parsedCount++;
      writeSongToArtist(obj.artist_name || obj.artist || obj.artistName || 'Unknown Artist', obj);
    }
  } else if (format === 'json-array') {
    console.log('Detected JSON array input (reading into memory).');
    const raw = fs.readFileSync(INPUT, 'utf8');
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) { console.error('JSON root is not an array'); process.exit(1); }
    for (const obj of arr) {
      parsedCount++;
      writeSongToArtist(obj.artist_name || obj.artist || obj.artistName || 'Unknown Artist', obj);
    }
  } else {
    console.error('Unknown format'); process.exit(1);
  }

  for (const v of artistStreams.values()) v.ws.end();

  console.log(`Parsed ${parsedCount} items — composing ${OUTPUT} ...`);
  const out = fs.createWriteStream(OUTPUT, { flags: 'w' });
  out.write('{"artists":[\n');
  const files = fs.readdirSync(TMP_DIR).filter(f => f.endsWith('.ndjson')).sort();
  let ai = 0;
  for (const f of files) {
    const filepath = path.join(TMP_DIR, f);
    const artistEntry = [...artistStreams.values()].find(v => v.filename === f);
    const displayName = artistEntry ? artistEntry.name : path.basename(f, '.ndjson');
    if (ai > 0) out.write(',\n');
    out.write('  {\n');
    out.write(`    "name": ${JSON.stringify(displayName)},\n`);
    out.write('    "songs": [\n');
    const lines = fs.readFileSync(filepath, 'utf8').split(/\r?\n/).filter(Boolean);
    for (let si=0; si<lines.length; si++) {
      if (si>0) out.write(',\n');
      out.write('      ' + lines[si]);
    }
    out.write('\n    ]\n');
    out.write('  }');
    ai++;
  }
  out.write('\n]}');
  out.end(() => {
    console.log(`Wrote ${OUTPUT} with ${ai} artists.`);
    try {
      for (const f of fs.readdirSync(TMP_DIR)) fs.unlinkSync(path.join(TMP_DIR, f));
      fs.rmdirSync(TMP_DIR);
      console.log('Temp cleaned up.');
    } catch (e) { console.warn('Temp cleanup failed:', e.message); }
  });
})();


import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Detect and transpose chords
export function transposeChord(chord: string, semitones: number) {
  const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  const flatNotes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
  
  // Function to determine if the chord uses flats
  const usesFlats = (chord: string) => {
    return chord.includes('b') && !chord.includes('maj') && !chord.includes('min');
  };
  
  // Extract the root note
  let rootNote = chord.charAt(0);
  let accidental = '';
  let remainder = '';
  let index = 1;
  
  if (index < chord.length && (chord.charAt(index) === '#' || chord.charAt(index) === 'b')) {
    accidental = chord.charAt(index);
    index++;
  }
  
  remainder = chord.substring(index);
  const rootWithAccidental = rootNote + accidental;
  
  // Find the position of the root note
  let noteSet = usesFlats(chord) ? flatNotes : notes;
  let position = noteSet.indexOf(rootWithAccidental);
  
  if (position === -1) {
    // Try alternative representation
    noteSet = noteSet === notes ? flatNotes : notes;
    position = noteSet.indexOf(rootWithAccidental);
    
    if (position === -1) {
      return chord; // Unable to transpose
    }
  }
  
  // Calculate new position
  let newPos = (position + semitones) % 12;
  if (newPos < 0) newPos += 12;
  
  // Return transposed chord
  const newNote = noteSet[newPos];
  return newNote + remainder;
}

// Format chords text with HTML
export function formatChordsText(text: string) {
  if (!text) return '';
  
  // Replace section headers [Verse], [Chorus], etc.
  let formatted = text.replace(/\[(.*?)\]/g, '<h3 class="text-primary font-bold text-lg mt-4 mb-2">[$1]</h3>');
  
  // Replace newlines with <br>
  formatted = formatted.replace(/\n/g, '<br>');
  
  return formatted;
}

// Parse chords from text for transposition
export function parseAndTransposeChords(text: string, semitones: number) {
  if (!text || semitones === 0) return text;
  
  // Define a regex pattern that matches common chord patterns
  const chordPattern = /\b([A-G][#b]?)(maj|min|m|aug|dim|sus[24]?|add\d+|7|9|11|13)?\b/g;
  
  // Replace each chord in the text
  return text.replace(chordPattern, (match) => {
    return transposeChord(match, semitones);
  });
}

// Fuzzy search function for artists and songs
export function fuzzySearch(items: any[], query: string, keys: string[]) {
  if (!query) return items;
  
  query = query.toLowerCase();
  
  return items.filter(item => {
    return keys.some(key => {
      const value = key.split('.').reduce((obj, k) => obj?.[k], item);
      return value?.toString().toLowerCase().includes(query);
    });
  });
}

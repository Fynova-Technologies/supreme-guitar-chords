export interface ChordDiagram {
  name: string;
  positions: number[];
  fingering: number[];
  frets: number;
}

export const chordDiagrams: Record<string, ChordDiagram> = {
  // Major chords
  'C': { name: 'C', positions: [0, 1, 0, 2, 3, 0], fingering: [0, 1, 0, 2, 3, 0], frets: 3 },
  'D': { name: 'D', positions: [-1, -1, 0, 2, 3, 2], fingering: [0, 0, 0, 1, 3, 2], frets: 3 },
  'E': { name: 'E', positions: [0, 2, 2, 1, 0, 0], fingering: [0, 2, 3, 1, 0, 0], frets: 3 },
  'F': { name: 'F', positions: [1, 1, 3, 3, 2, 1], fingering: [1, 1, 3, 4, 2, 1], frets: 3 },
  'G': { name: 'G', positions: [3, 2, 0, 0, 3, 3], fingering: [3, 2, 0, 0, 3, 4], frets: 3 },
  'A': { name: 'A', positions: [-1, 0, 2, 2, 2, 0], fingering: [0, 0, 1, 2, 3, 0], frets: 3 },
  'B': { name: 'B', positions: [-1, 2, 4, 4, 4, 2], fingering: [0, 1, 3, 4, 4, 1], frets: 4 },
  
  // Minor chords
  'Am': { name: 'Am', positions: [-1, 0, 2, 2, 1, 0], fingering: [0, 0, 2, 3, 1, 0], frets: 3 },
  'Bm': { name: 'Bm', positions: [-1, 2, 4, 4, 3, 2], fingering: [0, 1, 3, 4, 2, 1], frets: 4 },
  'Cm': { name: 'Cm', positions: [-1, 3, 5, 5, 4, 3], fingering: [0, 1, 3, 4, 2, 1], frets: 5 },
  'Dm': { name: 'Dm', positions: [-1, -1, 0, 2, 3, 1], fingering: [0, 0, 0, 2, 3, 1], frets: 3 },
  'Em': { name: 'Em', positions: [0, 2, 2, 0, 0, 0], fingering: [0, 2, 3, 0, 0, 0], frets: 3 },
  'Fm': { name: 'Fm', positions: [1, 1, 3, 3, 2, 1], fingering: [1, 1, 3, 4, 2, 1], frets: 3 },
  'Gm': { name: 'Gm', positions: [3, 5, 5, 3, 3, 3], fingering: [1, 3, 4, 1, 1, 1], frets: 5 },
  
  // 7th chords
  'C7': { name: 'C7', positions: [0, 1, 0, 2, 1, 0], fingering: [0, 1, 0, 2, 1, 0], frets: 3 },
  'D7': { name: 'D7', positions: [-1, -1, 0, 2, 1, 2], fingering: [0, 0, 0, 2, 1, 3], frets: 3 },
  'E7': { name: 'E7', positions: [0, 2, 0, 1, 0, 0], fingering: [0, 2, 0, 1, 0, 0], frets: 3 },
  'F7': { name: 'F7', positions: [1, 1, 3, 2, 1, 1], fingering: [1, 1, 3, 2, 1, 1], frets: 3 },
  'G7': { name: 'G7', positions: [3, 2, 0, 0, 0, 1], fingering: [3, 2, 0, 0, 0, 1], frets: 3 },
  'A7': { name: 'A7', positions: [-1, 0, 2, 0, 2, 0], fingering: [0, 0, 2, 0, 3, 0], frets: 3 },
  'B7': { name: 'B7', positions: [-1, 2, 1, 2, 0, 2], fingering: [0, 2, 1, 3, 0, 4], frets: 3 },
  
  // Extended chords from your JSON
  'Bb': { name: 'Bb', positions: [-1, 1, 3, 3, 3, 1], fingering: [0, 1, 2, 3, 4, 1], frets: 3 },
};
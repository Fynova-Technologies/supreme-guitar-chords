export interface Artist {
  _id: string;
  name: string;
  songs: Song[];
}

export interface Song {
  _id: string;
  title: string;
  chords: string;
  chord_lyrics: string;
  lyrics: string;
  lyrics_chords: string;
  key: string;
  type: 'chords' | 'tabs';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  favorite?: boolean;
}
export interface Artist {
  name: string;
  songs: Song[];
}

export interface Song {
  title: string;
  chords: string;
  key: string;
  type: 'chords' | 'tabs';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  favorite?: boolean;
}
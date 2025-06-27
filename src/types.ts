export interface Track {
  title: string;
  src: string;
  albumArt?: string;
  length: number;
}

export interface Playlist {
  name: string;
  tracks: Track[];
  albumArt: string;
}

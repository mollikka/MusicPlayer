export interface Track {
  title: string;
  src: string;
  albumArt?: string;
}

export interface Playlist {
  name: string;
  tracks: Track[];
  albumArt: string;
}

import { Playlist, Track } from "../types";
import { DisplayAlbumart } from "./DisplayAlbumart";

interface DisplaySongProps {
  track: Track | null;
  playlist: Playlist;
}

export const DisplaySong: React.FC<DisplaySongProps> = ({
  track,
  playlist,
}: DisplaySongProps) => {
  return track ? (
    <div style={{ textAlign: "center" }}>
      <DisplayAlbumart
        albumArt={track.albumArt ?? playlist.albumArt}
        name={playlist.name}
      ></DisplayAlbumart>
      <p>{track.title}</p>
    </div>
  ) : (
    <></>
  );
};

import { Playlist, Track } from "../types";

interface PlaylistProps {
  playlist: Playlist;
  currentTrack: Track | null;
  changeTrack: (index: number) => void;
}

export const DisplayPlaylist: React.FC<PlaylistProps> = ({
  playlist,
  currentTrack,
  changeTrack,
}: PlaylistProps) => {
  return (
    <>
      <h3>{playlist.name}</h3>
      <ol>
        {playlist.tracks.map((track, index) => (
          <li key={`${index}`}>
            <span onClick={() => changeTrack(index)}>
              {currentTrack === track ? ">" : undefined}
              {track.title}
            </span>
          </li>
        ))}
      </ol>
    </>
  );
};

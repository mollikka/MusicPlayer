import { formatTime } from "../format";
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
      <h2>Tracks</h2>
      <table style={{ width: "100%", tableLayout: "auto" }}>
        {playlist.tracks.map((track, index) => (
          <tr
            key={`${index}`}
            onClick={() => changeTrack(index)}
            className={currentTrack === track ? "playingTrack" : ""}
          >
            <td>{currentTrack === track ? ">" : " "}</td>
            <td>{index+1}</td>
            <td
              style={{
                width: "100%",
                maxWidth: "1px", // forces the cell to shrink if needed
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {track.title}
            </td>
            <td>{formatTime(track.length)}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

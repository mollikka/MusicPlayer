import { Playlist } from "../types";
import { DisplayAlbumart } from "./DisplayAlbumart";

interface PlaylistMenuProps {
  playlists: Playlist[];
  changePlaylist: (playlist: number) => void;
  currentPlaylist: Playlist;
}

export const PlaylistMenu: React.FC<PlaylistMenuProps> = ({
  playlists,
  changePlaylist,
  currentPlaylist,
}: PlaylistMenuProps) => {
  return (
    <>
      <ul style={{ padding: 0 }}>
        {playlists.map((playlist, index) => (
          <li key={`${index}`} style={{ width: "25ch" }}>
            <button onClick={() => changePlaylist(index)}>
              {currentPlaylist === playlist ? ">" : ""}
              {playlist.name}
              <DisplayAlbumart
                albumArt={playlist.albumArt}
                name={playlist.name}
              ></DisplayAlbumart>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

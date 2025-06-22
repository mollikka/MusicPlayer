import { useEffect, useMemo, useRef, useState } from "react";
import MusicPlayer from "./MusicPlayer";
import { Playlist } from "../types";
import { PlaylistMenu } from "./PlaylistMenu";
import { VolumeBar } from "./VolumeBar";

export const MusicApp: React.FC = () => {
  const audio = useRef<HTMLAudioElement>(new Audio()).current;
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState<number>(0);
  const currentPlaylist = useMemo(
    () =>
      playlists[currentPlaylistIndex] || {
        name: "N/A",
        tracks: [],
        albumArt: "",
      },
    [playlists, currentPlaylistIndex]
  );

  useEffect(() => {
    const loadPlaylists = async () => {
      try {
        const response = await fetch("/music/playlists.json");
        const data = await response.json();
        setPlaylists(data);
      } catch (error) {
        console.error("Failed to load playlists:", error);
      }
    };
    loadPlaylists();
  }, []);

  return (
    <>
      <VolumeBar audio={audio} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto" }}>
        <div className="column">
          <MusicPlayer audio={audio} currentPlaylist={currentPlaylist} />
        </div>
        <div className="column">
          <PlaylistMenu
            currentPlaylist={currentPlaylist}
            changePlaylist={setCurrentPlaylistIndex}
            playlists={playlists}
          />
        </div>
      </div>
    </>
  );
};

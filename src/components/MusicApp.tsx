import { useEffect, useRef, useState } from "react";
import MusicPlayer from "./MusicPlayer";
import { Playlist } from "../types";

interface MusicAppProps {
  playlistUrl: string;
}

export const MusicApp: React.FC<MusicAppProps> = ({
  playlistUrl,
}: MusicAppProps) => {
  const audio = useRef<HTMLAudioElement>(new Audio()).current;
  const [playlist, setPlaylist] = useState<Playlist>({
    name: "N/A",
    tracks: [],
    albumArt: "",
  });

  useEffect(() => {
    const loadPlaylist = async () => {
      try {
        const response = await fetch(playlistUrl);
        const data = await response.json();
        setPlaylist(data);
      } catch (error) {
        console.error("Failed to load playlist:", error);
      }
    };
    loadPlaylist();
  }, [playlistUrl]);

  return (
    <>
      <MusicPlayer audio={audio} currentPlaylist={playlist} />
    </>
  );
};

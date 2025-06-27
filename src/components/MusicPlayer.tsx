import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Playlist } from "../types";
import { DisplaySong } from "./DisplaySong";
import { DisplayPlaylist } from "./DisplayPlaylist";
import { PlaybackControls } from "./PlaybackControls";
import { SeekBar } from "./SeekBar";
import { VolumeBar } from "./VolumeBar";

interface MusicPlayerProps {
  audio: HTMLAudioElement;
  currentPlaylist: Playlist;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  audio,
  currentPlaylist,
}: MusicPlayerProps) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    setCurrentTrackIndex(0);
    setIsPlaying(false);
  }, [currentPlaylist]);

  const currentTrack = useMemo(
    () =>
      currentPlaylist.tracks.length > currentTrackIndex
        ? currentPlaylist.tracks[currentTrackIndex]
        : { src: "", title: "N/A" },
    [currentPlaylist, currentTrackIndex]
  );

  const toggleIsPlaying = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    const audioSrc = currentTrack.src;
    const fullNewSrc = new URL(audioSrc, window.location.href).href;
    if (fullNewSrc != audio.src) {
      audio.src = fullNewSrc;
    }

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audio, currentTrack, isPlaying]);

  const nextTrack = useCallback(() => {
    const newIndex = Math.min(
      currentTrackIndex + 1,
      currentPlaylist.tracks.length - 1
    );
    setCurrentTrackIndex(newIndex);
  }, [currentPlaylist, currentTrackIndex]);

  const prevTrack = useCallback(() => {
    if (audio.currentTime < 2) {
      const newIndex = Math.max(currentTrackIndex - 1, 0);
      setCurrentTrackIndex(newIndex);
    }
    audio.currentTime = 0;
  }, [currentTrackIndex, audio]);

  const setTrack = useCallback((track: number) => {
    setCurrentTrackIndex(track);
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    const handleEndOfSong = () => {
      nextTrack();
    };

    audio.addEventListener("ended", handleEndOfSong);

    return () => {
      audio.removeEventListener("ended", handleEndOfSong);
    };
  }, [audio, nextTrack]);

  return (
    <>
      <DisplaySong track={currentTrack} playlist={currentPlaylist} />
      <SeekBar audio={audio} />
      <PlaybackControls
        nextTrack={nextTrack}
        prevTrack={prevTrack}
        togglePlayPause={toggleIsPlaying}
        isPlaying={isPlaying}
      />
      <DisplayPlaylist
        playlist={currentPlaylist}
        currentTrack={currentTrack}
        changeTrack={setTrack}
      />
      <VolumeBar audio={audio} />
    </>
  );
};

export default MusicPlayer;

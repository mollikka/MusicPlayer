import React, { useEffect, useState } from "react";
import { formatTime } from "../format";

interface SeekBarProps {
  audio: HTMLAudioElement | null;
}

export const SeekBar: React.FC<SeekBarProps> = ({ audio }: SeekBarProps) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [audio]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setCurrentTime(value);
    if (audio) {
      audio.currentTime = value;
    }
  };

  return (
    <div className="seekBar" style={{ textAlign: "center" }}>
      <span style={{ float: "left" }}>{formatTime(currentTime)}</span>

      <span style={{ float: "none" }}>{formatTime(duration)}</span>

      <span style={{ float: "right" }}>{`-${formatTime(
        duration - currentTime
      )}`}</span>

      <input
        className="slider"
        name="seekbar"
        type="range"
        min={0}
        max={duration}
        step={0.001}
        value={currentTime}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
    </div>
  );
};

import React, { useEffect, useState } from "react";

interface SeekBarProps {
  audio: HTMLAudioElement | null;
}

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

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
    <div style={{ textAlign: "center" }}>
      <span style={{ minWidth: 40, float: "left" }}>
        {formatTime(currentTime)}
      </span>

      <span style={{ minWidth: 40, float: "none" }}>
        {formatTime(duration)}
      </span>

      <span style={{ minWidth: 40, float: "right" }}>{`-${formatTime(
        duration - currentTime
      )}`}</span>

      <input
        className="slider seekBar"
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

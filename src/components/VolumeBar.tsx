import React, { useEffect, useState } from "react";

interface VolumeBarProps {
  audio: HTMLAudioElement | null;
}

export const VolumeBar: React.FC<VolumeBarProps> = ({ audio }) => {
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (!audio) return;

    const updateVolume = () => {
      setVolume(audio.volume);
    };

    audio.addEventListener("volumechange", updateVolume);

    return () => {
      audio.removeEventListener("volumechange", updateVolume);
    };
  }, [audio]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (audio) {
      audio.volume = value;
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <label htmlFor="volume">🔈</label>
      <input
        className="slider volumeBar"
        name="volume"
        type="range"
        min={0}
        max={1}
        step={0.001}
        value={volume}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
    </div>
  );
};

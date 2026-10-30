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
    <div className="volumeBar" style={{ display: "flex", width: "100%" }}>
      <label htmlFor="volume" style={{ flexShrink: 0 }}>
        <span className="emoji" aria-hidden="true">
          {volume === 0
            ? "🔇"
            : volume < 0.33
            ? "🔈"
            : volume < 0.66
            ? "🔉"
            : "🔊"}
        </span>
        Volume:
      </label>
      <input
        id="volume"
        className="slider"
        name="volume"
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleChange}
        style={{ flexGrow: 1 }}
        aria-valuetext={`${Math.round(volume*100)} %`}
      />
    </div>
  );
};

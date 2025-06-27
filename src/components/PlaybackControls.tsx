interface PlaybackControlsProps {
  prevTrack: () => void;
  togglePlayPause: () => void;
  nextTrack: () => void;
  isPlaying: boolean;
}

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  prevTrack,
  togglePlayPause,
  nextTrack,
  isPlaying,
}: PlaybackControlsProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button className="playbackButton" onClick={prevTrack}>
        ⏮︎
      </button>
      <button className="playbackButton" onClick={togglePlayPause}>
        {isPlaying ? "⏸︎" : "⏵︎"}
      </button>
      <button className="playbackButton" onClick={nextTrack}>
        ⏭︎
      </button>
    </div>
  );
};

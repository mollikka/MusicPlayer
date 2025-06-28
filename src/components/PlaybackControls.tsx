interface PlaybackControlsProps {
  prevTrack: () => void;
  togglePlayPause: () => void;
  nextTrack: () => void;
  isPlaying: boolean;
}

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M 4,2 V 22 L 24,12" />
  </svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M 5,2 H 10 V 22 H 5 Z" />
    <path d="m 14,2 h 5 v 20 h -5 z" />
  </svg>
);

const PrevIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M 23,7 V 17 L 13,12" />
    <path d="M 13,7 V 17 L 3,12" />
    <path d="M 3,7 H 1 v 10 h 2 z" />
  </svg>
);

const NextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M 1,7 V 17 L 11,12" />
    <path d="M 11,7 V 17 l 10,-5" />
    <path d="m 21,7 h 2 v 10 h -2 z" />
  </svg>
);

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  prevTrack,
  togglePlayPause,
  nextTrack,
  isPlaying,
}: PlaybackControlsProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button className="playbackButton" onClick={prevTrack}>
        <PrevIcon />
      </button>
      <button className="playbackButton" onClick={togglePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <button className="playbackButton" onClick={nextTrack}>
        <NextIcon />
      </button>
    </div>
  );
};

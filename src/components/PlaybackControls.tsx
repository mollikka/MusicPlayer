interface PlaybackControlsProps {
  prevTrack: () => void;
  togglePlayPause: () => void;
  nextTrack: () => void;
  isPlaying: boolean;
}

type PlaybackButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PlaybackButton: React.FC<PlaybackButtonProps> = ({
  style = {},
  ...props
}) => {
  const baseStyle: React.CSSProperties = {
    width: "4ch",
    textAlign: "center",
    fontSize: "3rem",
    ...style,
  };

  return (
    <button style={baseStyle} {...props}>
      {props.children}
    </button>
  );
};

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  prevTrack,
  togglePlayPause,
  nextTrack,
  isPlaying,
}: PlaybackControlsProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <PlaybackButton onClick={prevTrack}>⏮︎</PlaybackButton>
      <PlaybackButton onClick={togglePlayPause}>
        {isPlaying ? "⏸︎" : "⏵︎"}
      </PlaybackButton>
      <PlaybackButton onClick={nextTrack}>⏭︎</PlaybackButton>
    </div>
  );
};

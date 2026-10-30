export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export const formatTimeAria = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes === 1 ? '1 minute, ' : minutes > 1 ? `${minutes} minutes, ` : ''}${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
};

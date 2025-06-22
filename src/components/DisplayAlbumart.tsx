export const DisplayAlbumart: React.FC<{
  albumArt: string;
  name: string;
}> = ({ albumArt, name }) => {
  return (
    <img
      src={albumArt}
      alt={name}
      style={{
        width: "100%",
      }}
    />
  );
};

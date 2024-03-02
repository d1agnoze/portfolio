export const Image = ({ src, size }: { src: string; size?: number }) => {
  return (
    <img
      src={src}
      style={{ flex: "flex: 0 0 auto" }}
      height={size ?? 20}
      width={size ?? 20}
    />
  );
};

import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const StudentTitle = ({ title1, titleColor, top, size, marginLeft }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const up = () =>
    spring({
      fps,
      frame,
      config: {
        damping: 400,
      },
    });
  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginLeft,
      }}
    >
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: size,
          titleColor,
          fontWeight: "800",
          top,
          textAlign: "center",
          position: "absolute",
          color: titleColor,
          display: "inline-block",
          transform: `translateY(${interpolate(up(10), [0, 1], [100, 0])}px)`,
        }}
      >
        {title1}
      </div>
    </AbsoluteFill>
  );
};

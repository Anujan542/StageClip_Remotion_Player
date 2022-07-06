import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import "./test.css";

export const MainTitle = ({
  title1,
  title2,
  titleColor,
  top,
  size,
  marginLeft,
  fontWeight,
}) => {
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
          fontFamily: "Noto Sans KR",
          letterSpacing: "10px",
          fontSize: size,
          titleColor,
          fontWeight: "900",
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
      <div
        style={{
          fontFamily: "Noto Sans KR",
          letterSpacing: "10px",
          fontSize: size,
          titleColor,
          fontWeight: "900",
          marginBottom: "21rem",
          textAlign: "center",
          position: "absolute",
          color: titleColor,
          display: "inline-block",
          transform: `translateY(${interpolate(up(10), [0, 1], [100, 0])}px)`,
        }}
      >
        {title2}
      </div>
    </AbsoluteFill>
  );
};

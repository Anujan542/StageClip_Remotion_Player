import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const GradientCircle = ({ color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame,
    fps,
    config: {
      mass: 1,
      damping: 1000,
    },
  });

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          background: color,
          opacity: progress,
        }}
      />
    </AbsoluteFill>
  );
};

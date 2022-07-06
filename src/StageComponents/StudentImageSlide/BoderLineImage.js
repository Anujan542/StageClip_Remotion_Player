import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const BorderLineImage = ({ width, height, radius, color1, color2 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: {
      //		Damping: 5,
      stiffness: 6,
      //	Mass: 6,
    },
  });
  const circumference = width * 20 + height * 20;
  const strokeDashoffset = interpolate(progress, [1, 10], [10, +circumference]);
  const gId = `g-${color1}-${color2}`;
  return (
    <Container width={width} height={height}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id={gId}>
            <stop stopColor={color1} />
            <stop stopColor={color2} />
          </linearGradient>
        </defs>
        <rect
          width={width - 48}
          height={height - 48}
          x={28}
          y={28}
          rx={radius}
          ry={radius}
          stroke={`url(#${gId})`}
          fill="none"
          strokeDasharray={`3000 ${circumference} `}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          strokeWidth={1}
        />
      </svg>
    </Container>
  );
};

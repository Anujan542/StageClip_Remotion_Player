import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import styled from "styled-components";

const Container = styled.p`
  font-size: 25px;
  text-align: center;
`;

export const ParagraphTitle = ({ text, marginLeft, x, y }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const progress = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });

  const xxx = x;
  const yyy = y;

  const translateY = interpolate(progress, [0, xxx], [yyy, 0]);

  return (
    <Container
      style={{
        marginLeft,
      }}
    >
      <div
        style={{
          fontFamily: "sans-serif",
          transform: `translateY(${translateY}px)`,
          fontSize: "25px",
        }}
      >
        {text}
      </div>
    </Container>
  );
};

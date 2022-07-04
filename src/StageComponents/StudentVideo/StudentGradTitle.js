import React from "react";
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const word = {
  marginLeft: 10,
  marginRight: 10,
  display: "inline-block",
};

export const StudentGradTitle = ({ gradTitle }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const words = gradTitle.split(" ");

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginTop: "3rem",
          }}
        >
          {words.map((t) => {
            const scale = spring({
              fps: videoConfig.fps,
              frame: frame - 10,
              config: {
                damping: 200,
              },
            });

            return (
              <span
                key={t}
                style={{
                  ...word,
                  color: "black",
                  transform: `scale(${scale})`,
                }}
              >
                {t}
              </span>
            );
          })}
        </h3>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

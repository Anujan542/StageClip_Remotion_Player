import { spring } from "remotion";
import { interpolate } from "remotion";
import { useCurrentFrame } from "remotion";
import { useVideoConfig } from "remotion";
import React from "react";

const UnderlineEffect = ({ color }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 20, 70], [0, 5, 10], {});

  return (
    <>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "-2rem",
          marginLeft: "50rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            transform: `scale(${scale})`,
          }}
        >
          {[color].map((s) => {
            const progress = spring({
              frame,
              fps,
              config: {
                damping: 200,
              },
            });
            return (
              <div
                key={s}
                style={{
                  backgroundColor: s,
                  flex: 1,
                  opacity: progress,
                  // Padding: 15,
                  //	Height: progress * 100 + '%',
                  border: `2px solid ${s}`,
                  color,
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UnderlineEffect;

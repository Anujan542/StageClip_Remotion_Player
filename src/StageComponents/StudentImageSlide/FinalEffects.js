import { AbsoluteFill } from "remotion";
import { interpolate } from "remotion";
import { useCurrentFrame } from "remotion";
import React from "react";

const FinalEffects = ({ color }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [1, 10], [0, 9]);

  return (
    <>
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: `${color}`,
            height: "10%",
            width: "100%",
            transform: `scale(${opacity})`,
          }}
        />
      </AbsoluteFill>
    </>
  );
};

export default FinalEffects;

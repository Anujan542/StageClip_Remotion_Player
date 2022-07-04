import React from "react";
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const UnderScorePath = ({ color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const config = useVideoConfig();

  const underscoreWidthRight = spring({
    from: 0,
    to: 3000,
    frame,
    fps,
    config: { mass: 10, damping: 500, stiffness: 40 },
  });

  const underscoreWidthLeft = spring({
    from: 0,
    to: -2200,
    frame,
    fps,
    config: { mass: 10, damping: 500, stiffness: 40 },
  });

  return (
    <>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "14rem",
          marginLeft: "44rem",
        }}
      >
        <svg
          viewBox={`0 0 ${config.width} ${config.height}`}
          width="100%"
          height="450px"
          //	Transform="translate(0, 0)"
        >
          <g id="g10">
            <path
              transform="scale(0.1)"
              style={{
                fill: `${color}`,
                //		FillOpacity: 0.5,
                fillRule: "nonzero",
                stroke: "none",
              }}
              d={`m 464.206,251.535 h ${underscoreWidthRight} v 64.653 H 464.206 Z`}
            />
          </g>
        </svg>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "14rem",
          marginLeft: "44rem",
        }}
      >
        <svg
          viewBox={`0 0 ${config.width} ${config.height}`}
          width="100%"
          height="450px"
          //		Transform="translate(100, 0)"
        >
          <g id="g10">
            <path
              transform="scale(0.1)"
              style={{
                fill: `${color}`,
                //	FillOpacity: 0.5,
                fillRule: "revert",
                stroke: "none",
              }}
              d={`m 464.206,251.535 h ${underscoreWidthLeft} v 64.653 H 464.206 Z`}
            />
          </g>
        </svg>
      </AbsoluteFill>
    </>
  );
};

export default UnderScorePath;

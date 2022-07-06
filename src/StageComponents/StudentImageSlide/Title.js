import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

const Title = ({
  titleText,
  titleColor,
  top,
  size,
  marginLeft,
  fontWeight,
  fontStyle,
  time,
}) => {
  const frame = useCurrentFrame();

  const charsShown = Math.floor(frame / time);
  const textToShow = titleText.slice(0, charsShown);
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
          fontSize: size,
          titleColor,
          fontWeight,
          fontStyle,
          top,
          textAlign: "center",
          position: "absolute",
          color: titleColor,
        }}
      >
        {textToShow}
      </div>
    </AbsoluteFill>
  );
};

export default Title;

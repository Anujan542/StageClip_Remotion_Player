import { Img } from "remotion";
import React from "react";
import { AbsoluteFill } from "remotion";
import FinalImage from "../assets/outtro.png";

const FinalOuttro = () => {
  return (
    <AbsoluteFill>
      <Img src={FinalImage} />
    </AbsoluteFill>
  );
};

export default FinalOuttro;

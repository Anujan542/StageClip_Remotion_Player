import { Img, useCurrentFrame } from "remotion";
import React from "react";
import { AbsoluteFill, Video } from "remotion";
import video from "../assets/liveclip.mp4";
import logo from "../assets/logo.png";
import { GlowingStroke } from "../StudentImageSlide/GlowingStroke";
import { StudentGradTitle } from "./StudentGradTitle";

const StudentVideo = ({ speed, volume }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        position: "relative",
        outline: "10px double white",
        outlineOffset: "-60px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <Img
          src={logo}
          style={{
            marginTop: "10rem",
            maxWidth: "20%",
            maxHeight: "20%",
            position: "absolute",
            marginRight: "2rem",
          }}
        />
        <></>
      </div>
      <Video volume={volume} playbackRate={speed} src={video} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            marginBottom: "10rem",
            background: "#00bfff",
            width: "900px",
            height: "100px",
          }}
        >
          <GlowingStroke
            width={900}
            height={100}
            radius={3}
            color1="black"
            color2="black"
          />

          <StudentGradTitle gradTitle="#NPCGrad" />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default StudentVideo;

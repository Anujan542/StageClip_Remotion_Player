import {
  AbsoluteFill,
  Img,
  OffthreadVideo,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from "remotion";
import styled from "styled-components";

import logo from "../assets/logo.png";
import studentVideo from "../assets/studentLive.mp4";

import "./test.css";
import { StudentTitle } from "./StudentTitle";
import { BorderLine } from "./BorderLine";
import { BorderLine2 } from "./BorderLine2";

const Container = styled(AbsoluteFill)`
  background-color: #00bfff;
  flex-direction: row;
  /* justify-content: start;
  align-items: start; */
`;

const Left = styled.div`
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  padding-right: 0px;
`;

const Spacer = styled.div`
  width: 100px;
`;

const Row = styled.div`
  flex-direction: row;
  display: flex;
`;

const StudentPersonalVideo = ({ title }) => {
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
  return (
    <Container>
      <Row>
        <Left>
          <div
            style={{
              position: "relative",
              marginTop: "13rem",
              marginLeft: "20rem",
            }}
          >
            <Img
              className="scale-in-hor-right"
              style={{
                maxWidth: "300px",
                maxHeight: "90px",
                transform: `${underscoreWidthRight}`,
              }}
              src={logo}
            />
            <StudentTitle
              title1={title}
              titleColor="black"
              top={100}
              size="45px"
            />
          </div>
        </Left>
        <Spacer />
        <Right>
          <>
            <BorderLine
              width={410}
              height={700}
              color1="white"
              color2="white"
              radius={5}
            />
            <BorderLine2
              width={400}
              height={670}
              color1="white"
              color2="white"
              radius={5}
            />
            <OffthreadVideo
              src={studentVideo}
              style={{
                marginTop: "2rem",
                maxHeight: "60%",
                maxWidth: "100%",
              }}
            />
          </>
        </Right>
      </Row>
    </Container>
  );
};

export default StudentPersonalVideo;

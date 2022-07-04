import { AbsoluteFill, Img, OffthreadVideo } from "remotion";
import styled from "styled-components";

import logo from "../assets/logo.png";
import studentVideo from "../assets/studentLive.mp4";

import "./test.css";
import { StudentTitle } from "./StudentTitle";

const Container = styled(AbsoluteFill)`
  background-color: #00bfff;
  flex-direction: row;
  /* justify-content: end;
	align-items: end; */
`;

const Left = styled.div`
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  padding-right: 0px;
`;

const Spacer = styled.div`
  width: 120px;
`;

const Row = styled.div`
  flex-direction: row;
  display: flex;
`;

const StudentPersonalVideo = ({ title }) => {
  return (
    <Container>
      <Row>
        <Left>
          <div
            style={{
              position: "relative",
              marginTop: "13rem",
              marginLeft: "10rem",
            }}
          >
            <Img
              className="scale-in-hor-right"
              width={400}
              height={130}
              src={logo}
            />
            <StudentTitle
              title1={title}
              titleColor="black"
              top={150}
              size="50px"
            />
          </div>
        </Left>
        <Spacer />
        <Right>
          <OffthreadVideo
            className="scale-in-hor-right"
            src={studentVideo}
            style={{
              marginTop: "2rem",
              maxHeight: "70%",
              maxWidth: "90%",
              outline: "8px double white",
              outlineOffset: "-30px",
            }}
          />
        </Right>
      </Row>
    </Container>
  );
};

export default StudentPersonalVideo;

import { AbsoluteFill, Img } from "remotion";
import styled from "styled-components";
import { MainTitle } from "./MainTitle";
import Title from "./Title";
import UnderScorePath from "./UnderScorePath";

import logo from "../assets/logo.png";
import { GlowingStroke } from "./GlowingStroke";
import { BorderLineImage } from "./BoderLineImage";

const Container = styled(AbsoluteFill)`
  background-color: #00bfff;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div``;

const Right = styled.div`
  padding-right: 200px;
`;

const Spacer = styled.div`
  width: 350px;
`;

const Row = styled.div`
  flex-direction: row;
  display: flex;
`;

const StudentImage = () => {
  return (
    <Container>
      <Row>
        <Left>
          <div style={{ position: "relative" }}>
            <BorderLineImage
              width={600}
              height={600}
              radius={3}
              color1="white"
              color2="white"
            />
            <Img
              width={600}
              height={600}
              src="https://live.staticflickr.com/4584/24519201918_3e44f4d6e3_b.jpg"
              style={{
                display: "block",
                outline: "1px double white",
                outlineOffset: "-40px",
              }}
            />
            <Img
              src={logo}
              style={{
                marginBottom: "0.5rem",
                maxWidth: "30%",
                maxHeight: "20%",
                position: "absolute",
                bottom: 30,
                marginLeft: "12rem",
              }}
            />
          </div>
        </Left>
        <Spacer />
        <Right>
          <MainTitle
            title1="ESSIEANA"
            title2="BENNETT"
            titleColor="black"
            top={85}
            size="60px"
            fontWeight={100}
            marginLeft={350}
          />
          <Title
            titleColor="black"
            titleText="TC in Pre-Nursing"
            top={280}
            size="45px"
            fontWeight={500}
            marginLeft={350}
            time={3}
          />
          <UnderScorePath color="black" />
        </Right>
      </Row>
    </Container>
  );
};

export default StudentImage;

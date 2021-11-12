import React from "react";
import { gsap } from "gsap";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./MainInfo1Style";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ButtonR,
  BtnWrap,
  ImgWrap,
  Img,
} from "./MainInfo4Style";

const MainInfo4 = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <Tween
                from={{
                  x: "300px",
                  y: "-300px",
                  scrollTrigger: {
                    trigger: ".textWrapper",
                    start: "-490px center",
                    end: "200px center",
                    scrub: 1,
                    // markers: true,
                  },
                }}
              >
                <TextWrapper className="textWrapper">
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <BtnWrap>
                    <Button
                      style={{ textDecoration: "none" }}
                      to="/mypage"
                      //smooth={true}
                      duration={500}
                      // spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Tween>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default MainInfo4;

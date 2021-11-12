import React from "react";
import { Button } from "../Button/ButtonStyle";

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
} from "./MainInfoStyle";

import { gsap } from "gsap";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
                  opacity: 0,
                  duration: 1,
                  x: "300px",
                  y: "-200px",
                  scrollTrigger: {
                    trigger: ".textWrapper",
                    start: "1000px center",
                    end: "1500px center",
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
              <Tween
                from={{
                  opacity: 0,
                  duration: 1,
                  x: "-300px",
                  scrollTrigger: {
                    trigger: ".imgWrapper",
                    start: "100px center",
                    end: "1500px center",
                    scrub: 1,
                    ease: "power4.out",
                    // markers: true,
                  },
                }}
              >
                <ImgWrap className="imgWrapper">
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Tween>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default MainInfo4;

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Timeline, Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const MainInfo = ({
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
                    start: "-400px center",
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
                    <ButtonR
                      to="/signup"
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
                    </ButtonR>
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
        {/* //!테스트중 ================================================================================== */}
        <ScrollTrigger
          start="-200px center"
          end="200px center"
          scrub={0.5}
          markers
        >
          <Tween
            to={{
              x: "300px",
              scrollTrigger: {
                trigger: ".square",
                start: "-200px center",
                end: "200px center",
                scrub: 0.5,
                markers: true,
              },
            }}
          >
            <div
              className="square"
              style={{ width: "100px", height: "100px", background: "#ccc" }}
            />
          </Tween>
        </ScrollTrigger>
        {/* //! ========================================================================================= */}
      </InfoContainer>
    </>
  );
};

export default MainInfo;

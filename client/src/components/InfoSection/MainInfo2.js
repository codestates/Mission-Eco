/*eslint-disable */
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
  Img1,
} from "./MainInfoStyle";
import { gsap } from "gsap";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MainInfo2 = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  headline1,
  headline2,
  headline3,
  description1,
  description2,
  description3,
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
                  <Heading lightText={lightText}>
                    <span>{headline1}</span>
                    <br />
                    <span>{headline2}</span>
                    <br />
                    <span>{headline3}</span>
                  </Heading>
                  <Subtitle darkText={darkText}>
                    <span>{description1}</span>
                    <br />
                    <span>{description2}</span>
                    <br />
                    <span>{description3}</span>
                    <br />
                  </Subtitle>
                  <BtnWrap>
                    <Button
                      to="/upload"
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
                    start: "-400px center",
                    end: "100px center",
                    scrub: 1,
                    ease: "power4.out",
                    //markers: true,
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

export default MainInfo2;

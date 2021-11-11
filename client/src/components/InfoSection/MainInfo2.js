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
  headline,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  let tl = gsap.timeline({ delay: 0.5 });

  tl.from(".logo", {
    y: -40,
    opacity: 0,
    duration: 2,
    ease: "power4",
  });
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <Tween
                from={{
                  x: "200px",
                  scrollTrigger: {
                    trigger: ".textWrapper",
                    start: "-300px center",
                    end: "-200px center",
                    scrub: 0.5,
                    ease: "power4",
                    // markers: true,
                  },
                }}
              >
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Tween
                    from={{
                      x: -40,
                      opacity: 0,
                      duration: 3,

                      scrollTrigger: {
                        trigger: ".logo",
                        ease: "power4",
                        scrub: 0.5,
                        start: "-300px center",
                        end: "-200px center",
                        // markers: true,
                      },
                    }}
                  >
                    <Heading className="logo" lightText={lightText}>
                      {headline}
                    </Heading>
                  </Tween>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <BtnWrap>
                    <Button
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
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Tween>
            </Column1>
            <Column2>
              <Tween
                from={{
                  opacity: 0,
                  duration: 3,
                  y: "200px",
                  scrollTrigger: {
                    trigger: ".imgWrapper",
                    start: "-500px center",
                    end: "-200px center",
                    scrub: 0.5,
                    //   markers: true,
                    ease: "power4",
                  },
                }}
              >
                <ImgWrap className="imgWrapper">
                  <Img1 src={img} alt={alt} />
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

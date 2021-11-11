import React from "react";
import { Tween } from "react-gsap";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Row1,
  Row2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ButtonR,
  BtnWrap,
  Slider,
  SliderBox,
  SlideItem,
  Img,
} from "./MainInfo1Style";

const MainInfo1 = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  headline1,
  headline2,
  description2,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Row1>
              <Tween
                from={{
                  x: "300px",
                  opacity: 0.7,
                  scrollTrigger: {
                    trigger: ".textWraper",
                    start: "-500px center",
                    end: "-100px center",
                    scrub: 4,
                    // markers: true,
                  },
                }}
              >
                <TextWrapper className="textWraper">
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>
                    <span>{headline1}</span>
                    <br />
                    {headline2}
                  </Heading>
                  <Subtitle darkText={darkText}>{description2}</Subtitle>
                </TextWrapper>
              </Tween>
            </Row1>
            <Row2>
              <Slider>
                <SliderBox>
                  <SlideItem>item1</SlideItem>
                  <SlideItem>item2</SlideItem>
                  <SlideItem>item3</SlideItem>
                  <SlideItem>item4</SlideItem>
                  <SlideItem>item5</SlideItem>
                  <SlideItem>item6</SlideItem>
                  <SlideItem>item7</SlideItem>
                  <SlideItem>item8</SlideItem>
                  <SlideItem>item1</SlideItem>
                  <SlideItem>item2</SlideItem>
                  <SlideItem>item3</SlideItem>
                  <SlideItem>item4</SlideItem>
                  <SlideItem>item5</SlideItem>
                  <SlideItem>item6</SlideItem>
                  <SlideItem>item7</SlideItem>
                  <SlideItem>item8</SlideItem>
                </SliderBox>
              </Slider>
            </Row2>
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
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default MainInfo1;

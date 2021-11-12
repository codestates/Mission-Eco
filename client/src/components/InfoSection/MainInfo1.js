import React from "react";
import { Tween } from "react-gsap";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Row1,
  Row2,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
  Slider,
  SliderBox,
  SlideItem,
  Button,
  Img
} from "./MainInfo1Style";

const MainInfo1 = ({
  lightBg,
  id,
  imgStart,
  lightText,
  darkText,
  headline1,
  headline2,
  description2,
  buttonLabel,
  imgs,
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
                  x: '300px',
                  opacity: .7,
                  scrollTrigger: {
                    trigger: '.textWraper',
                    start: '-500px center',
                    end: '-100px center',
                    scrub: 4,
                    // markers: true,
                  }
                }}
              >
                <TextWrapper className="textWraper">
             
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
                   {imgs.map((img, idx) => 
                   <SlideItem key={idx} >
                    <Img src={img} alt={img} />
                  </SlideItem>
                  )}
                </SliderBox>
              </Slider>
            </Row2>
            <BtnWrap>
                <Button
                  style={{ textDecoration: "none" }}
                  to="/challenge"
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
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default MainInfo1;

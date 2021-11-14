import React, { useState } from "react";
import { Button } from "../Button/ButtonStyle";
import Video from "../../videos/video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./HeroSectionStyle";

const HeroSection = (props) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          playsinline
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        ></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>지구를 위해 함께 실천해요!</HeroH1>
        <HeroP>
          환경을 위해 어떻게 실천할지 막막하시나요? 작은것부터 실천할 수
          있습니다.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            // primary="1"
            dark="true"
            //smooth={true}
            duration={500}
            //spy={true}
            exact="true"
            offset={-80}
          >
            함께 시작하기
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

/*eslint-disable */
import React from "react";
import style from "styled-components";
import HeroSection from "../components/HeroSection/HeroSection";
import MainInfo1 from "../components/InfoSection/MainInfo1";
import MainInfo4 from "../components/InfoSection/MainInfo4";
import MainInfo3 from "../components/InfoSection/MainInfo3";
import { ScrollTopBtn } from "../components/ScrollTop/ScrollTopBtn";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/InfoSection/Data";
import MainInfo2 from "../components/InfoSection/MainInfo2";
import styled from "styled-components";

const MainCotainer = styled.div`
  background-color: #fff;
`;
function Main() {
  return (
    <MainCotainer>
      <HeroSection />
      <MainInfo1 {...homeObjOne} />
      <MainInfo2 {...homeObjTwo} />
      <MainInfo3 {...homeObjThree} />
      <MainInfo4 {...homeObjFour} />
      <ScrollTopBtn />
    </MainCotainer>
  );
}

export default Main;

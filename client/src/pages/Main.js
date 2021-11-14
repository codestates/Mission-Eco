/*eslint-disable */
import React, { useEffect, useState } from "react";
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
import LandingLoad from "../components/Loading/LandingLoad";
const MainCotainer = styled.div`
  background-color: #fbf3e4;
`;
function Main() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {!isLoading ? (
        <LandingLoad />
      ) : (
        <MainCotainer>
          <HeroSection />
          <MainInfo1 {...homeObjOne} />
          <MainInfo2 {...homeObjTwo} />
          <MainInfo3 {...homeObjThree} />
          <MainInfo4 {...homeObjFour} />
          <ScrollTopBtn />
        </MainCotainer>
      )}
    </>
  );
}

export default Main;

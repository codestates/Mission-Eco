import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import MainInfo1 from "../components/InfoSection/MainInfo1";
import MainInfo from "../components/InfoSection/MainInfo";
import MainInfo4 from "../components/InfoSection/MainInfo";
import MainInfo3 from "../components/InfoSection/MainInfo3";
import { ScrollTopBtn } from "../components/ScrollTop/ScrollTopBtn";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/InfoSection/Data";

function Main() {
  return (
    <div>
      <HeroSection />
      <MainInfo1 {...homeObjOne} />
      <MainInfo {...homeObjTwo} />
      <MainInfo3 />
      <MainInfo4 {...homeObjFour} />
    </div>
  );
}

export default Main;

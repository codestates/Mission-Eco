import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import MainInfo from "../components/InfoSection/MainInfo";
import { ScrollTopBtn } from "../components/ScrollTop/ScrollTopBtn";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/InfoSection/Data";
import MainInfo2 from "../components/InfoSection/MainInfo2";

function Main() {
  return (
    <div>
      <HeroSection />
      <MainInfo {...homeObjOne} />

      <MainInfo2 {...homeObjTwo} />
      <MainInfo {...homeObjThree} />
      <MainInfo {...homeObjFour} />
      <ScrollTopBtn />
    </div>
  );
}

export default Main;

import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import MainInfo from "../components/InfoSection/MainInfo";
import { ScrollTopBtn } from "../components/ScrollTop/ScrollTopBtn";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";

function Main() {
  return (
    <div>
      <HeroSection />
      <MainInfo {...homeObjOne} />
      <MainInfo {...homeObjTwo} />
      <MainInfo {...homeObjThree} />
      <ScrollTopBtn />
    </div>
  );
}

export default Main;

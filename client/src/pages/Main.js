/*eslint-disable */
import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import MainInfo from "../components/InfoSection/MainInfo";
import { ScrollTopBtn } from "../components/ScrollTop/ScrollTopBtn";
import { homeObjTwo } from "../components/InfoSection/Data";
import MainInfo2 from "../components/InfoSection/MainInfo2";

function Main() {
  return (
    <div>
      <HeroSection />

      <MainInfo2 {...homeObjTwo} />

      <ScrollTopBtn />
    </div>
  );
}

export default Main;

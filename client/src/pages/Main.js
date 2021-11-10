import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

//import { useHistory } from "react-router-dom"
import HeroSection from "../components/HeroSection/HeroSection";
import MainInfo from "../components/InfoSection/MainInfo";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/InfoSection/Data";

function Main() {
  const Toggle = useSelector((state) => state.infoReducer.isToggle);

  //const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return setIsOpen(false);
  }, []);
  console.log(Toggle);

  //sidebar
  //navbar
  //<heroSection>
  //<infosection>

  return (
    <div>
      <HeroSection />
      <MainInfo {...homeObjOne} />
      <MainInfo {...homeObjTwo} />
      <MainInfo {...homeObjThree} />
      <MainInfo {...homeObjFour} />
    </div>
  );
}

export default Main;

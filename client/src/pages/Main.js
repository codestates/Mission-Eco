import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
//import { useHistory } from "react-router-dom"
import HeroSection from "../components/HeroSection/HeroSection";
import MainInfo from "../components/InfoSection/MainInfo";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
function Main() {
  const isLogin = useSelector((state) => state.infoReducer.isLogin);
  const dispatch = useDispatch();
  //const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, []);

  //sidebar
  //navbar
  //<heroSection>
  //<infosection>

  return (
    <div>
      <Navbar />
      <HeroSection />
      <MainInfo {...homeObjOne} />
      <MainInfo {...homeObjTwo} />
      <MainInfo {...homeObjThree} />
    </div>
  );
}

export default Main;

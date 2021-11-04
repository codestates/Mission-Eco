import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { isToggle } from "../../src/Redux/actions";
//import { useHistory } from "react-router-dom"
import HeroSection from "../components/HeroSection/HeroSection";
import MainInfo from "../components/InfoSection/MainInfo";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Sidebar from "../components/Sidebar/Sidebar";
function Main({}) {
  const Toggle = useSelector((state) => state.infoReducer.isToggle);
  const dispatch = useDispatch();
  //const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return setIsOpen(false);
  }, []);
  console.log(Toggle);
  const toggle = () => {
    console.log("click");
    setIsOpen(!isOpen);
  };

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
    </div>
  );
}

export default Main;

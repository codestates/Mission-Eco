/*eslint-disable */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserInfo, userSignout } from "../../Redux/actions";

import { ReactComponent as Menubar } from "../../imges/menubar.svg";
import axios from "axios";
//import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarStyle";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //const state = useSelector((state) => state.infoReducer.isLogin);
  const isLogin = useSelector((state) => state.infoReducer.isLogin);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleLogout = async () => {
    alert("로그아웃버튼");
    //일반유저 로그아웃
    dispatch(userSignout());
    // dispatch(isLogin(false));
    dispatch(deleteUserInfo(null));
    //dispatch(getUserLikeList(null));
    history.push("/challenge");
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>
            Misson-Eco
          </NavLogo>
          <MobileIcon>
            <Menubar fill="white" />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="challenge"
                //smooth={true}
                duration={500}
                //spy={true}
                exact="true"
                offset={-80}
                //activeClass="active"
                scrollNav={scrollNav}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="challenge"
                //smooth={true}
                duration={500}
                //spy={true}
                exact="true"
                offset={-80}
                scrollNav={scrollNav}
              >
                Challenge
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/log"
                //smooth={true}
                duration={500}
                //spy={true}
                exact="true"
                offset={-80}
                scrollNav={scrollNav}
              >
                Mission-log
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/upload"
                //smooth={true}
                duration={500}
                //spy={true}
                exact="true"
                offset={0}
                scrollNav={scrollNav}
              >
                Let's ECO
              </NavLinks>
            </NavItem>
            {!isLogin ? null : (
              <NavItem>
                <NavLinks
                  to="mypage"
                  //smooth={true}
                  duration={500}
                  //spy={true}
                  exact="true"
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  Mypage
                </NavLinks>
              </NavItem>
            )}
          </NavMenu>
          <NavBtn>
            {!isLogin ? (
              <NavBtnLink to="/login">Signin</NavBtnLink>
            ) : (
              <NavBtnLink to="/" onClick={handleLogout}>
                Logout
              </NavBtnLink>
            )}
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;

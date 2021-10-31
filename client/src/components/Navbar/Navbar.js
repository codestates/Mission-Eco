/*eslint-disable */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserInfo, userSignout } from "../../Redux/actions";

import { ReactComponent as Menubar } from "../../imges/menubar.svg";
import axios from "axios";
//import { FaBars } from "react-icons/fa";
//import { animateScroll as scroll } from "react-scroll";
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
  console.log(isLogin, "로그인 상태");
  const [scrollNav, setScrollNav] = useState(false);
  /*
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
  /*
  const toggleHome = () => {
    window.scrollToTop();
  };
  */
  const handleLogout = async () => {
    alert("로그아웃버튼");
    //일반유저 로그아웃
    await dispatch(userSignout());
    // dispatch(isLogin(false));
    dispatch(deleteUserInfo(null));
    //dispatch(getUserLikeList(null));
    history.push("/challenge");
    /*/소셜 로그아웃 
    //카카오
    const KAKAO_LOGOUT = `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&logout_redirect_uri=https://localhost:3000`;
  window.location.href = KAKAO_LOGOUT;
    //구글 
    */
  };
  /*
  const oauthLogout = () => {
    window.location.href = KAKAO_LOGOUT;
    dispatch(isLogin(!isLogin));
    dispatch(getUserInfo(null));
  };*/

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          <NavLogo to="/">Misson-Eco</NavLogo>
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
                offset={-80}
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

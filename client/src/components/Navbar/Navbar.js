/*eslint-disable */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserInfo, userLogout, isToggle } from "../../Redux/actions";
import logo from "../../imges/logo.png";
import { ReactComponent as Menubar } from "../../imges/menubar.svg";

//import { FaBars } from "react-icons/fa";

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
  Img,
} from "./NavbarStyle";
require("dotenv").config();

const Navbar = ({ togglehandler }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state) => state.infoReducer.isLogin);
  const [scrollnav, setScrollNav] = useState(0);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(1);
    } else {
      setScrollNav(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.addEventListener("scroll", changeNav);
    };
  }, []);

  useEffect(() => {}, [isLogin]);
  const toggleHome = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleLogout = async () => {
    //일반유저 로그아웃
    dispatch(userLogout());
    dispatch(deleteUserInfo(null));
    history.push("/challenge");
  };

  return (
    <>
      <Nav scrollnav={scrollnav} disabled>
        <NavContainer>
          <NavLogo to="/" onClick={toggleHome} scrollnav={scrollnav} disabled>
            <Img src={logo} />
            Misson-Eco
          </NavLogo>
          <MobileIcon onClick={togglehandler}>
            <Menubar />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="/challenge"
                // smooth={true}
                duration={500}
                //  spy={true}
                exact="true"
                offset={-80}
                scrollnav={scrollnav}
                disabled
              >
                Challenge
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/log"
                // smooth={true}
                duration={500}
                //  spy={true}
                exact="true"
                offset={-80}
                scrollnav={scrollnav}
                disabled
              >
                Mission-log
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/upload"
                //  smooth={true}
                duration={500}
                // spy={true}
                exact="true"
                offset={-80}
                scrollnav={scrollnav}
                disabled
              >
                Let's ECO
              </NavLinks>
            </NavItem>
            {!isLogin ? null : (
              <>
                <NavItem>
                  <NavLinks
                    to="mypage"
                    //  smooth={true}
                    duration={500}
                    //spy={true}
                    exact="true"
                    offset={-80}
                    scrollnav={scrollnav}
                    disabled
                  >
                    Mypage
                  </NavLinks>
                </NavItem>
              </>
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

import React from "react";
import { ReactComponent as CloseBtn } from "../../imges/close.svg";
import { useSelector } from "react-redux";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarStyle";

const Sidebar = ({ togglehandler }) => {
  const isToggle = useSelector((state) => state.infoReducer.isToggle);

  //console.log(isToggle);

  return (
    <SidebarContainer isToggle={isToggle}>
      <Icon onClick={togglehandler}>
        <CloseBtn />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="challenge" onClick={togglehandler}>
            Challenge
          </SidebarLink>
          <SidebarLink to="log" onClick={togglehandler}>
            Mission-log
          </SidebarLink>
          <SidebarLink to="upload" onClick={togglehandler}>
            Let's ECO
          </SidebarLink>
          <SidebarLink to="signup" onClick={togglehandler}>
            Signup
          </SidebarLink>
          <SidebarLink to="mypage" onClick={togglehandler}>
            Mypage
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

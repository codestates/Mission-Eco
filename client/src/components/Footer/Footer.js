import React from "react";
import { Route } from "react-router-dom";
import {
  FooterContainer,
  FooterWrap,
  FooterItemsWrapper,
  FooterItem,
  // FooterLinksContainer,
  Title,
  Name,
  Position,
  GithubBadge,
  AdminLogin,
} from "./FooterStyle";
import { ReactComponent as Ourgithub } from "../../imges/github48.svg";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          {/* <FooterLinksContainer> */}
          <Title>🌏 ABOUT US 🌳</Title>

          <FooterItemsWrapper>
            <FooterItem>
              <Name>김수경</Name>
              <Position>Back-end</Position>
              {/* <GithubBadge>여기엔 깃헙뱃지img🏞 에 개인 깃헙 링크 🔗 </GithubBadge> */}
              <GithubBadge src="https://img.shields.io/badge/Github-ㅤeden0514ㅤ-F3FCEE?style=for-the-badge&logo=GitHub/" />
            </FooterItem>
            <FooterItem>
              <Name>김양현</Name>
              <Position>Back-end</Position>
              <GithubBadge src="https://img.shields.io/badge/Github-loocia1910-F3FCEE?style=for-the-badge&logo=GitHub/" />
            </FooterItem>
            <FooterItem>
              <Name>김효영</Name>
              <Position>Front-end</Position>
              <GithubBadge src="https://img.shields.io/badge/Github-ㅤㅤHYO00ㅤㅤㅤ-F3FCEE?style=for-the-badge&logo=GitHub/" />
            </FooterItem>
            <FooterItem>
              <Name>조현진</Name>
              <Position>Front-end</Position>
              <GithubBadge src="https://img.shields.io/badge/Github-chohyeonjin-F3FCEE?style=for-the-badge&logo=GitHub/" />
            </FooterItem>
          </FooterItemsWrapper>
          {/* </FooterLinksContainer>     */}

          <a target="_blank" href="https://github.com/codestates/Mission-Eco">
            <Ourgithub />
          </a>
          <AdminLogin to="/admin-login">관리자 로그인</AdminLogin>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;

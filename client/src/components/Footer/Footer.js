import React from "react";
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
  MissionEcoGithubContainer,
  LogoContainer,
  MissionEcoTxt,
  AdminLoginContainer,
  AdminLogin,
} from "./FooterStyle";
import { ReactComponent as GithubGrayLogo } from "../../imges/github48.svg";
import { ReactComponent as BlueOctocat } from "../../imges/blueOctocat.svg";
import { ReactComponent as SquareLogo } from "../../imges/githubSquareS.svg";
import { ReactComponent as TxtLogo } from "../../imges/githubtxtlogo.svg";
import { ReactComponent as TxtLogoWhite } from "../../imges/githubtxtlogowhite.svg";

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
              <a target="_blank" href="https://github.com/eden0514">
                <GithubBadge src="https://img.shields.io/badge/Github-ㅤeden0514ㅤ-F3FCEE?style=for-the-badge&logo=GitHub/" />
              </a>
            </FooterItem>
            <FooterItem>
              <Name>김양현</Name>
              <Position>Back-end</Position>
              <a target="_blank" href="https://github.com/loocia1910">
                <GithubBadge src="https://img.shields.io/badge/Github-loocia1910-F3FCEE?style=for-the-badge&logo=GitHub/" />
              </a>
            </FooterItem>
            <FooterItem>
              <Name>김효영</Name>
              <Position>Front-end</Position>
              <a target="_blank" href="https://github.com/HYO00">
                <GithubBadge src="https://img.shields.io/badge/Github-ㅤㅤHYO00ㅤㅤㅤ-F3FCEE?style=for-the-badge&logo=GitHub/" />
              </a>
            </FooterItem>
            <FooterItem>
              <Name>조현진</Name>
              <Position>Front-end</Position>
              <a target="_blank" href="https://github.com/cho-hyeonjin">
                <GithubBadge src="https://img.shields.io/badge/Github-chohyeonjin-F3FCEE?style=for-the-badge&logo=GitHub/" />
              </a>
            </FooterItem>
          </FooterItemsWrapper>
          <MissionEcoGithubContainer>
            <a target="_blank" href="https://github.com/codestates/Mission-Eco">
              <LogoContainer>
                <BlueOctocat />
              </LogoContainer>
              <TxtLogoWhite />
              {/* <TxtLogoWhite /> */}
              {/* <SquareLogo />
              <TxtLogo /> */}
            </a>
            {/* <GithubGrayLogo />
            </a>
            <MissionEcoTxt>Mission-Eco</MissionEcoTxt> */}
          </MissionEcoGithubContainer>
          <AdminLoginContainer>
            <AdminLogin to="/admin-login">관리자로그인</AdminLogin>
          </AdminLoginContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;

import React from "react";

import {
  ServicesContainer,
  Title,
  Icon,
  ServicesWrapper,
  ServicesCard,
  Name,
  Position,
  GithubBadge,
  AdminLogin,
} from "./FooterStyle";

const Footer = () => {
  return (
    <>
      <ServicesContainer>
        <Title>🌏 ABOUT US 🌳</Title>
        <AdminLogin to="/admin-login">관리자 로그인</AdminLogin>
        {/* <Icon>깃헙 아이콘 img에 우리 깃헙 링크 🔗</Icon> */}
        {/* <Icon src="https://toppng.com/uploads/preview/see-all-open-source-repositories-github-logo-11563031735gubsot66ry.png" /> */}
        <i className="fab fa-github-square fa-2x">Mission-Eco</i>

        <ServicesWrapper>
          <ServicesCard>
            <Name>김수경</Name>
            <Position>Back-end</Position>
            {/* <GithubBadge>여기엔 깃헙뱃지img🏞 에 개인 깃헙 링크 🔗 </GithubBadge> */}
            <GithubBadge src="https://img.shields.io/badge/Github-eden0514-1E3C13?style=for-the-badge&logo=GitHub/" />
          </ServicesCard>

          <ServicesCard>
            <Name>김양현</Name>
            <Position>Back-end</Position>
            <GithubBadge src="https://img.shields.io/badge/Github-loocia1910-F3FCEE?style=for-the-badge&logo=GitHub/" />
          </ServicesCard>

          <ServicesCard>
            <Name>김효영</Name>
            <Position>Front-end</Position>
            <GithubBadge src="https://img.shields.io/badge/Github-HYO00-59A13F?style=for-the-badge&logo=GitHub/" />
          </ServicesCard>

          <ServicesCard>
            <Name>조현진</Name>
            <Position>Front-end</Position>
            <GithubBadge src="https://img.shields.io/badge/Github-chohyeonjin-FFFBCE?style=for-the-badge&logo=GitHub/" />
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Footer;

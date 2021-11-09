import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  /* background-color: #5d8767; */
  /* background-color: #9dbfa5; */
  background-color: #3d6887;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  //text-align: left;

  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0;
    padding: 20px;
    width: 100%;
  }
`;

export const Title = styled.h1`
  align-items: center;
  display: flex;
  //margin: 30px;
  color: #fff;
  font-size: 3em;

  @media screen and (max-width: 768px) {
    font-size: 2.3em;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.8em;
  }
`;

export const Icon = styled.img`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
`;

export const Position = styled.p`
  display: flex;
  align-items: center;
`;

export const GithubBadge = styled.img`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const AdminLogin = styled(Link)`
  text-decoration: none;

  display: flex;
  color: black;
  margin-bottom: 2em;
  &:hover {
    cursor: pointer;
  }
`;

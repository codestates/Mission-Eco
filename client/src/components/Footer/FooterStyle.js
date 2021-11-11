import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #3d6887;
  display: flex;
  height: 400px;

  @media screen and (max-width: 570px) {
    height: 500px;
  }
  @media screen and (max-width: 480px) {
    height: 450px;
  }
`;

export const FooterWrap = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  align-items: center;
  display: flex;
  color: #fff;
  font-size: 1.8em;
  margin: 0 0 0.5em 0;
  @media screen and (max-width: 870px) {
    margin: 0.5em 1em;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.8em;
  }
  @media screen and (max-width: 480px) {
    margin-top: 0.5em;
  }
`;

export const FooterItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px;

  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: #fff;
    /* margin: 20px 30px 20px 30px; */
  }
  @media screen and (max-width: 570px) {
    flex-direction: column;
    margin: 0 20px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px 70px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 1200px) {
    margin: 0px 50px;
  }
  @media screen and (max-width: 1100px) {
    margin: 0 30px;
  }
  @media screen and (max-width: 570px) {
    margin: 10px;
  }
  @media screen and (max-width: 480px) {
    margin: 5px;
  }
`;

export const Icon = styled.img`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
  /* @media screen and (max-width: 480px) {
    font-size: 11px;
  } */
`;

export const Position = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  /* @media screen and (max-width: 480px) {
    font-size: 10px;
  } */
`;

export const GithubBadge = styled.img`
  display: flex;
  align-items: center;
  border: 0.1px solid gray;
  border-radius: 10px;
  width: 120px;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;

export const MissionEcoGithubContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 0 0;
  text-decoration: none;
  text-decoration-line: none;
  @media screen and (max-width: 870px) {
  }
  @media screen and (max-width: 768px) {
    margin: 20px 30px 0 30px;
  }
  @media screen and (max-width: 480px) {
    margin: 10px 30px 0 30px;
  }
`;

export const LogoContainer = styled.span`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MissionEcoTxt = styled.p`
  text-decoration-line: none;
  color: #fff;
  /* color: black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 25px;
  margin: 0 5px;
  font-weight: bold;
  @media screen and (max-width: 870px) {
  }
  @media screen and (max-width: 768px) {
    /* display: none; */
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AdminLoginContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 20px 0 0 0;
  @media screen and (max-width: 870px) {
  }
  @media screen and (max-width: 768px) {
    margin: 5px 0 0 0;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const AdminLogin = styled(Link)`
  text-decoration: none;
  display: flex;
  right: 0px;
  bottom: 0px;
  color: #34373b;
  font-size: 12px;
  font-weight: bold;
  margin: 1em 0 0 0;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin: 20px 30px 0 30px;
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    margin: 10px 0 0 0;
    font-size: 12px;
  }
`;

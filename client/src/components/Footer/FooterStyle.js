import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #3d6887;
  display: flex;
  height: 400px;
  @media screen and (max-width: 870px) {
    height: 600px;
  }
  @media screen and (max-width: 480px) {
    height: 450px;
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

export const Title = styled.h1`
  align-items: center;
  display: flex;
  color: #fff;
  font-size: 1.5em;
  margin-top: 1.5em;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8em;
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
    margin: 30px 20px;
    box-sizing: border-box;
    color: #fff;
  }
  @media screen and (max-width: 870px) {
    flex-direction: column;
    margin: 20px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const FooterItem = styled.div`
  /* color: black; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 30px 70px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 1200px) {
    margin: 30px 50px;
  }
  @media screen and (max-width: 1100px) {
    margin: 30px;
  }
  @media screen and (max-width: 950px) {
    margin: 30px 20px;
  }
  @media screen and (max-width: 850px) {
    margin: 0;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Icon = styled.img`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 950px) {
  }
  @media screen and (max-width: 850px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Position = styled.p`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-bottom: 5px;
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 950px) {
  }
  @media screen and (max-width: 850px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const GithubBadge = styled.img`
  display: flex;
  align-items: center;
  border: 0.1px solid gray;
  border-radius: 10px;
  /* width: 120px;
  height: 20px; */
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 950px) {
  }
  @media screen and (max-width: 850px) {
    width: 120px;
    height: 20px;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
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

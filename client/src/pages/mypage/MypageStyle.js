import styled from "styled-components";
import { Link } from "react-router-dom";
import blob1 from "../../imges/blob1.svg";

export const MypageContainer = styled.div`
  background-image: url(${blob1});
  height: 100%;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
`;

export const MypageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;

  z-index: -1;
`;

export const H1 = styled.h1`
  display: flex;
  width: 100%;
  margin-top: 4em;
  justify-content: center;
  margin-bottom: 0.5em;
  font-size: 2.5em;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const H2 = styled.h2`
  display: flex;
  margin: 15px 5px 35px 15px;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
`;

export const MypageBtn = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 2em;
  @media screen and (max-width: 768px) {
    width: 600px;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    width: 300;
  }
`;

export const BtnLink = styled(Link)`
  text-decoration: none;
`;
export const LinkCheckPassword = styled.div`
  border: solid #5d8767;
  border-radius: 50px;
  background: #5d8767;
  white-space: nowrap;
  padding: 5px 17px;
  color: #fff;
  font-size: 15px;
  font-weight: 550;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #5d8767;
    font-size: 15px;
    font-weight: 550;
    border: solid #5d8767;
  }
`;

export const Container = styled.div`
  background: whitesmoke;
  width: 100%;
  margin: 15px;
  padding: 20px;
  border: 3px solid gray;
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    margin: 5px;
    padding: 15px;
  }
`;

export const Title = styled.p`
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const ListContainer = styled.div`
  max-width: 1000px;
  max-height: 350px;
  overflow-y: auto;
  //margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 20px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 15px 45px;
  }
`;

export const ListBadgeContainer = styled.div`
  max-width: 1000px;
  max-height: 350px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 10px;
  overflow-y: auto;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ListItem = styled.li`
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

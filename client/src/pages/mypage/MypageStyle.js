import styled from "styled-components";
import { Link } from "react-router-dom";
import blob1 from "../../imges/blob1.svg";

export const MypageContainer = styled.div`
  /* margin-top: 15em; */
  padding-top: 10em;

  @media screen and (max-width: 768px) {
    //height: 1100px;
  }

  @media screen and (max-width: 480px) {
    //height: 1300px;
  }

  background-image: url(${blob1});
  height: 100%;
  //min-height: 1800px;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  font-size: 2.5em;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const H2 = styled.h2`
  display: flex;
`;

export const H3 = styled.h3``;

export const MypageBtn = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 2em;
  @media screen and (max-width: 768px) {
    width: 600px;
  }
  @media screen and (max-width: 480px) {
    width: 300;
  }
`;

export const BtnLink = styled(Link)`
  /* position: relative; */
  /* float: right; */
  text-decoration: none;
`;
export const LinkCheckPassword = styled.div`
  border: solid #5d8767;
  border-radius: 50px;
  background: #5d8767;
  white-space: nowrap;
  padding: 5px 20px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #5d8767;
    font-size: 18px;
    font-weight: 600;
    border: solid #5d8767;
  }
`;

export const Container = styled.div`
  background: whitesmoke;
  margin: 15px;
  padding: 20px;
  border: 3px solid gray;
  border-radius: 10px;
`;

export const Title = styled.p`
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const ListContainer = styled.ul`
  /* background: brown; */
  display: flex;
  flex-direction: row;
  padding: 20px;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const ListItem = styled.li`
  /* background: midnightblue; */
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

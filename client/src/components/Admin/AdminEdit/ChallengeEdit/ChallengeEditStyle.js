import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: -1;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;
export const Title1 = styled(Link)`
  margin-top: 150px;
  font-size: 2rem;
  color: #010106;
  padding: 20px 100px 10px 100px;
  margin-right: 80px;
  text-decoration: none;
  border-radius: 20px 20px 0 0;
  background-color: #9dbfa5;

  @media screen and (max-width: 1300px) {
    padding: 20px 50px 5px 50px;
    margin-right: 40px;
    font-size: 1.7rem;
  }
  @media screen and (max-width: 1164px) {
    //grid-template-columns: 1fr 1fr;
    padding: 10px 20px 0 20px;
    margin-right: 20px;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    //height: 1300px;
  }
`;
export const Title2 = styled(Link)`
  margin-top: 150px;
  margin-left: 100px;
  font-size: 2.2rem;
  color: #010106;
  padding: 20px 50px 10px 50px;
  text-decoration: none;
  border-radius: 20px 20px 0 0;
  background-color: #ffe081;
  @media screen and (max-width: 1300px) {
    //grid-template-columns: 1fr 1fr;
    padding: 20px 30px 0 30px;
    margin-right: 40px;
    font-size: 1.9rem;
  }
  @media screen and (max-width: 1164px) {
    //grid-template-columns: 1fr 1fr;
    padding: 10px 20px 0 20px;
    margin-right: 20px;
    font-size: 1.7rem;
  }

  @media screen and (max-width: 480px) {
    //height: 1300px;
  }
`;
export const ChallengeContainer = styled.div`
  display: grid;
  //grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  align-items: center;
  //grid-gap: 16px;
  padding: 0 230px;

  @media screen and (max-width: 768px) {
    //grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 0 20px;
  }
  @media screen and (max-width: 480px) {
    //grid-template-columns: 1fr;
    width: 100%;
    padding: 0 20px;
  }
`;
export const ListWrapper = styled.div`
  //display: flex;
  background-color: #ffe081;
  border-radius: 25px;
  padding: 60px;
`;
export const AddWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const ListTitle = styled.h2`
  padding-right: 20px;
`;
export const Btn = styled.button`
  border: 0;
  outline: none;
  text-decoration: none;
  padding: 2px 5px 0 5px;
  font-size: 15px;
  border-radius: 3px;
  background: #ffa928;
  white-space: nowrap;
  color: #010606;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const Table = styled.table`
  border-collapse: collapse;
  border-top: 1px solid #444444;
  width: 100%;
  height: 500px;
  //table-layout: fixed;
`;

export const TR = styled.tr`
  //border: 1px solid black;
  font-size: 20px;
  background-color: #ffa928;
`;
export const TH = styled.th`
  border-bottom: 1px solid #444444;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
`;

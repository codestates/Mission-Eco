import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: -1;

  @media screen and (max-width: 768px) {
    //height: 1100px;
  }

  @media screen and (max-width: 480px) {
    //height: 1300px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
`;
export const Title1 = styled(Link)`
  margin-top: 150px;
  font-size: 2.2rem;
  color: #010106;
  padding: 20px 100px 10px 100px;
  border-radius: 20px 20px 0 0;
  margin-right: 80px;
  text-decoration: none;
  background-color: #9dbfa5;

  @media screen and (max-width: 768px) {
    padding: 20px 50px 5px 50px;
    margin-right: 40px;
    font-size: 1.9rem;
  }

  @media screen and (max-width: 480px) {
    //height: 1300px;
  }
`;
export const Title2 = styled(Link)`
  margin-top: 150px;
  margin-left: 100px;
  border-radius: 20px 20px 0 0;
  background-color: #ffe081;
  font-size: 2rem;
  color: #010106;
  padding: 20px 50px 10px 50px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    padding: 20px 50px 5px 50px;
    margin-right: 40px;
    font-size: 1.7rem;
  }

  @media screen and (max-width: 480px) {
    //height: 1300px;
  }
`;

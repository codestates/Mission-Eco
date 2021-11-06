import styled from "styled-components";
import blob1 from "../../../imges/blob1.svg";

export const ChallengeContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  z-index: -1;

  //background-image: url(${blob1});
  @media screen and (max-width: 768px) {
    //height: 1100px;
  }

  @media screen and (max-width: 480px) {
    //height: 1300px;
  }
`;

export const ChallengeWrapper = styled.div`
  max-width: 1000px;

  //margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ChallengeSubbar = styled.div`
  display: flex;
  height: 50px;
  width: 900px;
  // flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1px 130px;
  border-top: 1px solid #010101;
  border-bottom: 1px solid #010101;

  //background: #d8e3e7;
  margin-bottom: 3em;
  @media screen and (max-width: 768px) {
    padding: 1px 50px;
    height: 60px;
    max-width: 1100px;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
    height: 70px;
    width: 370px;
  }
`;

export const ChallengeSelect = styled.li`
  list-style: none;
  text-align: center;
  margin: 1em;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const ChallengeH1 = styled.h1`
  margin-top: 150px;
  font-size: 2.5rem;
  color: #010106;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ServicesCardColor = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  //justify-content: flex-start;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  height: 300px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  background-color: #a2d2ff;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  border: 0;
  outline: 0;
  font-size: 16px;

  background-color: transparent;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

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

  // flex-direction: column;
  //align-items: center;
  padding: 0 8.2rem;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  color: rgb(100, 100, 100);
  margin-bottom: 4em;

  @media screen and (min-width: 768px) and (max-width: 980px) {
    padding: 0 6rem;
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    padding: 0 1.2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const ChallengeSelect = styled.li`
  list-style: none;
  margin-right: 6rem;

  @media screen and (min-width: 768px) and (max-width: 980px) {
    margin-right: 4.4rem;
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    margin-right: 1.4rem;
  }

  @media screen and (max-width: 480px) {
    margin-right: 0;
  }
`;

export const ChallengeH1 = styled.h1`
  margin-top: 150px;
  font-size: 2.5rem;
  color: #010106;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
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

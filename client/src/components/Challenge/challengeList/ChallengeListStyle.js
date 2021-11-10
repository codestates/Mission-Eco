import styled from "styled-components";
import blob1 from "../../../imges/blob1.svg";
import { Link as LinkR } from "react-router-dom";

export const ChallengeContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: -1;
  min-height: 100%;
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

export const LoadingeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChallengeSubbar = styled.div`
  display: flex;
  height: 8em;
  width: 900px;
  justify-content: space-between;
  //justify-content: center;
  align-items: center;
  padding: 1px 30px;
  position: relative;
  //  border-top: 1px solid #99a799;
  // border-bottom: 1px solid #99a799;
  border-radius: 10px;
  //border: 1px solid #234b68;
  // background: #fff;
  margin-bottom: 3em;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  @media screen and (max-width: 768px) {
    padding: 1px 5px;

    max-width: 1100px;
    width: 700px;
  }
  @media screen and (max-width: 480px) {
    height: 70px;
    width: 370px;
  }
`;

export const ChallengeSelect = styled.li`
  list-style: none;
  text-align: center;
  margin: 1em;

  @media screen and (max-width: 480px) {
    &.upload {
      display: none;
    }
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
  text-decoration: none;
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 14px 10px;
  border: 0;
  font-size: 16px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #dbe6fd;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ChallengeP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: black;

  &.subTitle {
    font-size: 1.2rem;
    margin-bottom: 1.4em;
  }
`;
export const ChallengeLink = styled(LinkR)`
  text-decoration: none;
  border-radius: 50px;

  background: #fff;
  white-space: nowrap;
  padding: 14px 10px;
  color: #dbe6fd;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #dbe6fd;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 4px;
  }
  @media screen and (max-width: 480px) {
    padding: 10px 4px;
  }
`;

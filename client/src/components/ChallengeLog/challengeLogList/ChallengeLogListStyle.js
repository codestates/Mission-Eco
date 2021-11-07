import styled from "styled-components";
import blob1 from "../../../imges/blob1.svg";

export const ChallengeLogContiner = styled.div`
  //height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: #010606;

  @media screen and (max-width: 768px) {
    //height: 1100px;
  }

  @media screen and (max-width: 480px) {
    // height: 1300px;
  }
`;

export const ChallengeLogWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
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

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0px;
  width: 280px;
  height: 340px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 340px;
    height: 400px;
  }
  @media screen and (max-width: 480px) {
    width: 340px;
    height: 400px;
  }
`;

export const SubTxt = styled.p`
  margin-bottom: 6rem;
  padding-top: 0.6rem;
  padding-bottom: 0.4rem;
  color: #999;
`;

export const ServicesH1 = styled.h1`
  padding-top: 13rem;
  font-size: 2.5rem;
  color: #010106;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  display: block;
  line-height: 1rem;
  font-size: 1rem;
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 1rem 1.5rem;
  color: #333;

  &:hover {
    background-color: #9dbfa5;
    transition: 0.8s;
    color: #fff;
  }

  @media screen and (min-width: 481px) and (max-width: 980px) {
    padding: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    border-right: 1px solid #ddd;
  }
`;

export const Select = styled.li`
  list-style: none;
  margin: 1em;
`;
export const ChallengeSubbar = styled.div`
  display: flex;
  height: 50px;
  width: 900px;
  // flex-direction: column;
  //justify-content: center;
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

export const Subbar = styled.div`
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

export const Img = styled.img``;

export const ServicesP = styled.div`
  font-size: 1rem;
  text-align: center;
  color: #333;
  /* border: 1px solid red; */
`;

export const SelectLogBox = styled.div`
  /* border: 1px solid blue; */
  margin-right: 14rem;

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

export const SelectLog = styled.select`
  display: inline-block;
  line-height: 1rem;
  border: 0;
  outline: 0;
  background-color: transparent;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  cursor: pointer;
  padding: 1rem 1.5rem;
  color: #333;

  &:hover {
    background-color: #9dbfa5;
    transition: 0.8s;
    color: #fff;
  }

  @media screen and (min-width: 481px) and (max-width: 980px) {
    padding: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Optioon = styled.option`
  display: block;
  font-size: 1rem;
  height: 20px;
`;

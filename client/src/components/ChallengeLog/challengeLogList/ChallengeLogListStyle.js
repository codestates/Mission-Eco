import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ChallengeLogContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: -1;
  min-height: 100%;
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

export const ChallengeLogH1 = styled.h1`
  margin-top: 150px;
  font-size: 2.5rem;
  color: #010101;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ChallengeP = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: black;

  &.subTitle {
    font-size: 1.2rem;
    margin-bottom: 1.4em;
  }

  @media screen and (max-width: 786px) {
    &.select {
      display: none;
      // margin-left: 1.2em;
    }
  }

  @media screen and (max-width: 480px) {
    &.select {
      display: contents;
    }
  }
`;
export const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
`;
export const Select = styled.li`
  list-style: none;
  margin: 1em;
`;
export const ChallengeSubbar = styled.div`
  display: flex;
  height: 8em;
  width: 900px;
  justify-content: space-between;
  //justify-content: center;
  align-items: center;
  padding: 1px 20px;
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
    padding: 0 10px 0 25px;
    height: 70px;
    width: 370px;
  }
`;

export const Dropdown = styled.div`
  //position: fixed;
  display: flex;

  @media screen and (max-width: 768px) {
    //flex-direction: column;
    //justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
  }
  //justify-content: center;
`;

export const DropButton = styled.button`
  // top: 0;
  //border: 1px solid rgb(37, 37, 37);
  //border-radius: 4px;
  background: transparent;
  //font-weight: 400;
  color: rgb(37, 37, 37);
  //padding: 12px;
  //width: 15em;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 12px;
  margin-right: 3em;

  @media screen and (max-width: 768px) {
    display: none;
    margin-right: 1em;
  }
  @media screen and (max-width: 480px) {
    display: flexbox;
    margin-right: 0.5em;
  }
`;
export const Dropdowncontent = styled.div`
  display: ${(props) => (props.isActive ? `block` : `block`)};

  z-index: 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #fcf9f9;
  width: 34em;
  height: 5em;
  //padding: 1em;
  //height: 300px;
  overflow: auto;
  //margin-left: 3em;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  overflow: auto;
  ::-webkit-scrollbar {
    /* 스크롤바 전체 영역 */
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    /*  스크롤  */
    background-color: #8facc0;
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    display: ${(props) => (props.isActive ? `block` : `none`)};
    padding: 0;
    height: 10em;
    margin-top: 6em;
    width: 10em;
  }
`;

export const List = styled.li`
  display: flex;
  float: none;

  text-decoration: none;
  color: rgb(37, 37, 37);
  font-size: 12px;
  padding: 12px 20px;
  &:hover {
    cursor: pointer;
    background-color: #dbe6fd;
    border-radius: 6px;
  }

  @media screen and (max-width: 768px) {
    float: none;
  }
`;

export const Img = styled.img``;

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

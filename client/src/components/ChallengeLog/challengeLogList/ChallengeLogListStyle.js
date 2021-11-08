import styled from "styled-components";

export const ChallengeLogContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: -1;
  min-height: 100%;

  @media screen and (max-width: 768px) {
    //height: 1100px;
  }
  @media screen and (max-width: 480px) {
    //height: 1300px;
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
  font-size: 1rem;
  text-align: center;
  color: black;
  &.subTitle {
    font-size: 1.2rem;
    margin-bottom: 1.4em;
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
  height: 10em;
  width: 900px;
  justify-content: space-between;
  //justify-content: center;
  align-items: center;
  padding: 1px 20px;
  border-top: 1px solid #99a799;
  border-bottom: 1px solid #99a799;
  //border-radius: 10px;
  //  background: #6f69ac;
  margin-bottom: 3em;
  @media screen and (max-width: 768px) {
    padding: 1px 20px;

    max-width: 1100px;
    width: 700px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 10px 0 10px;
    height: 70px;
    width: 370px;
  }
`;

export const Subbar = styled.div`
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;

  padding: 1px 280px;
  border-top: 1px solid #99a799;
  border-bottom: 1px solid #99a799;
  color: rgb(100, 100, 100);
  margin-bottom: 3em;
  justify-content: left;
  @media screen and (max-width: 480px) {
    padding: 1px 50px;
  }
`;

export const Dropdown = styled.div`
  //position: fixed;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
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
    margin-right: 1em;
  }
  @media screen and (max-width: 480px) {
    margin-right: 0.5em;
  }
`;
export const Dropdowncontent = styled.div`
  display: ${(props) => (props.isActive ? `block` : `block`)};

  //position: absolute;
  z-index: 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #dbe6fd;
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
    margin-top: 8em;
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
    background-color: #d3e4cd;
  }

  @media screen and (max-width: 768px) {
    float: none;
  }
`;

export const Img = styled.img``;

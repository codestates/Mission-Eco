import styled from "styled-components";

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
  color: #fff;
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
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
  padding: 1px 280px;
  border-top: 1px solid #6d9886;
  border-bottom: 1px solid #6d9886;
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
`;

export const DropButton = styled.button`
  top: 0;
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
`;
export const Dropdowncontent = styled.div`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  position: absolute;
  z-index: 1; /*다른 요소들보다 앞에 배치*/
  font-weight: 400;
  background-color: #f9f9f9;
  width: 200px;
`;

export const List = styled.li`
  display: block;
  text-decoration: none;
  color: rgb(37, 37, 37);
  font-size: 12px;
  padding: 12px 20px;
  &:hover {
    cursor: pointer;
    background-color: #d3e4cd;
  }
`;

export const Img = styled.img``;

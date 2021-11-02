// ChallengeLogStyle에서 복붙함
import styled from "styled-components";

export const ServicesContiner = styled.div`
  //height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    //height: 1100px;
  }

  @media screen and (max-width: 480px) {
    // height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
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

export const ServicesIcon = styled.img`
  height: 240px;
  width: 260px;
  margin-bottom: 10px;
  border: 1px solid #aaa492;

  @media screen and (max-width: 768px) {
    height: 300px;
    width: 320px;
  }
`;

export const ServicesH1 = styled.h1`
  margin-top: 150px;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
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
export const Subbar = styled.div`
  display: flex;
  // flex-direction: column;
  //justify-content: center;
  //align-items: center;
  padding: 1px 280px;
  border-top: 1px solid #6d9886;
  border-bottom: 1px solid #6d9886;
  color: rgb(100, 100, 100);
  margin-bottom: 3em;

  @media screen and (max-width: 480px) {
    padding: 1px 50px;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropButton = styled.button`
  border: 1px solid rgb(37, 37, 37);
  border-radius: 4px;
  background-color: #f5f5f5;
  font-weight: 400;
  color: rgb(37, 37, 37);
  padding: 12px;
  width: 15em;

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
  min-width: 200px;
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

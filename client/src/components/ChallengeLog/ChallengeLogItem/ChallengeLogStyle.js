import styled from "styled-components";

export const ServicesContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  background: #fff;

  @media screen and (max-width: 768px) {
    //height: 1100px;
  }

  @media screen and (max-width: 480px) {
    //height: 1300px;
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
  width: 260px;
  height: 240px;
  margin-bottom: 10px;
  border: 1px solid #d8d8d8;
  background: ${(props) => props.background || "white"};

  @media screen and (max-width: 768px) {
    height: 300px;
    width: 320px;
  }
`;

export const Subbar = styled.div`
  display: flex;

  // flex-direction: column;
  //justify-content: center;
  //align-items: center;
  padding: 1px 280px;
  border-top: 1px solid green;
  border-bottom: 1px solid green;
  color: rgb(100, 100, 100);
  margin-bottom: 3em;

  @media screen and (max-width: 480px) {
    padding: 1px 50px;
  }
`;

export const Select = styled.li`
  list-style: none;
  margin: 1em;
`;

export const ServicesH1 = styled.h1`
  margin-top: 200px;
  font-size: 2.8rem;
  color: #010106;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.span`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 0.8rem;
  text-align: right;
`;

export const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
`;

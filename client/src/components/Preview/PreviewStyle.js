import styled from "styled-components";

export const PreviewCT = styled.form`
  //flex-basis: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  //border: 1px solid black;
  margin: 2em;
  //flex-direction: column;
  @media screen and (max-width: 768px) {
    border: none;
    width: 27em;
    height: 24em;
  }
  @media screen and (max-width: 480px) {
    width: 270px;
    height: 300px;
  }
`;
export const Title = styled.h3`
  //width: 100%;
  text-align: center;
  //margin-bottom: 1em;
  color: green;
`;
export const Container = styled.div`
  //padding: 1em 2em;
  display: flex;
  //justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const IMG = styled.img`
  width: 5em;
  height: 5em;
  padding: 1em;
  margin-left: 0.5em;
  margin-right: 1em;
  border-radius: 50%;
`;
export const Info = styled.div`
  width: 100%;
`;
export const Logs = styled.p`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 0.2em;
  font-size: 1.2rem;
`;
export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0px;
  width: 340px;
  height: 440px;
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
    width: 280px;
    height: 400px;
  }
`;

export const ServicesIcon = styled.img`
  width: 320px;
  height: 330px;
  margin-bottom: 15px;
  border: 1px solid #d8d8d8;
  background: ${(props) => props.background || "white"};

  @media screen and (max-width: 768px) {
    height: 300px;
    width: 320px;
  }
  @media screen and (max-width: 480px) {
    width: 260px;
    height: 300px;
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
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const List = styled.ul`
  margin-top: 20px;
`;

export const Item = styled.li`
  list-style-type: none;
`;

export const Img = styled.img`
  background: transparent;
  width: 300px;
  height: 300px;
`;

import styled from "styled-components";

export const PreviewCT = styled.div`
  //flex-basis: 50%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  //border: 1px solid black;
  margin: 2em;
  //flex-direction: column;
  @media screen and (max-width: 768px) {
    border: none;
    //width: 27em;
    //height: 24em;
  }
  @media screen and (max-width: 480px) {
    margin: 0.5em;
  }
`;
export const Title = styled.h3`
  //width: 100%;
  text-align: center;
  height: 0px;
  margin-bottom: 0;
  color: #010101;
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
export const LogCardContatainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  //align-items: center;
  border-radius: 6px;
  //width: 280px;
  max-height: 400px; //왜 주석을 풀면 이미지크기가 달라질까?
  padding-bottom: 14px;
  overflow: hidden;
  //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 340px;
    height: 420px;
  }
  @media screen and (max-width: 480px) {
    width: 320px;
    height: 460px;
  }
`;

export const LogImgContainer = styled.div`
  width: 340px;
  min-height: 280px;
  margin-bottom: 1em;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  @media screen and (max-width: 768px) {
    height: 300px;
    width: 340px;
  }
  @media screen and (max-width: 480px) {
    width: auto;
    height: 300px;
  }
`;

export const LogImg = styled.img`
  width: 100%;
  height: 100%;
  background: #fff;
`;

export const ServicesS = styled.span`
  font-size: 1rem;
  margin-bottom: 4px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: right;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ResultBox = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: left;
    font-size: 16px;
    text-align: left;
    font-weight: 500;
  }
`;

export const List = styled.ul`
  margin-top: 20px;

  //display: flex;
  text-align: left;
  @media screen and (max-width: 480px) {
    font-size: 16px;
    text-align: left;
    font-weight: 500;
  }
`;

export const Item = styled.li`
  list-style-type: none;
  margin-top: 0.6rem;
`;

export const Img = styled.img`
  background: transparent;
  width: 100px;
  height: 100px;
`;

export const LogContent = styled.div`
  padding: 0 0.5em;
`;

export const LogH2 = styled.span`
  font-size: 1rem;
  margin-bottom: 0.2rem;
  text-align: left;
`;

export const LogP = styled.p`
  font-size: 0.8rem;
  color: #010101;
  &.time {
    color: #9a9483;
  }
`;

export const LogHashP = styled.p`
  font-size: 1rem;
  text-align: left;
  margin-bottom: 1.4rem;
  color: #234b68;
  font-weight: 600;
`;

export const NameNtime = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
`;

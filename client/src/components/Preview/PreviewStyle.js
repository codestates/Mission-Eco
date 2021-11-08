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
  border-radius: 0px;
  width: 23em;
  height: 27em;
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
    height: 450px;
  }
  @media screen and (max-width: 480px) {
    width: 280px;
    height: 400px;
  }
`;

export const LogImgContainer = styled.div`
  max-width: 26.1rem;
  height: 290px;
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

export const LogImg = styled.img`
  width: 100%;
  height: 100%;
  background: #fff;
`;

export const ServicesH2 = styled.span`
  font-size: 1rem;
  margin-bottom: 10px;
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

export const List = styled.ul`
  margin-top: 20px;
`;

export const Item = styled.li`
  list-style-type: none;
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

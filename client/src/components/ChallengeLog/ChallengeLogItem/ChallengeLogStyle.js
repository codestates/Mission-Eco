import styled from "styled-components";

export const LogCardContatainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //align-items: center;
  //border-radius: 6px;
  //width: 280px;
  max-height: 420px; //왜 주석을 풀면 이미지크기가 달라질까?
  padding: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 340px;
    height: 440px;
  }
  @media screen and (max-width: 480px) {
    width: 320px;
    height: 460px;
  }
`;

export const LogImgContainer = styled.div`
  width: 260px;
  min-height: 280px;
  margin-bottom: 1em;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #11324d;
  //background: ${(props) => props.background || "white"};

  @media screen and (max-width: 768px) {
    height: 300px;
    width: 310px;
  }

  @media screen and (max-width: 480px) {
    height: 300px;
    width: 290px;
  }
`;

export const LogImg = styled.img`
  width: 100%;
  height: 100%;
  background: #fff;
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

export const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
`;

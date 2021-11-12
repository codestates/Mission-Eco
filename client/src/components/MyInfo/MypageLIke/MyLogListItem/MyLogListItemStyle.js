// ! MyLogListItem용으로 수정해야함
import styled from "styled-components";

export const LogCardContatainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 6px;
  max-height: 340px;
  padding-bottom: 14px;
  overflow: hidden;

  position: relative;

  @media screen and (max-width: 768px) {
    width: 340px;
    height: 420px;
  }
  @media screen and (max-width: 480px) {
    width: 320px;
    height: 460px;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0.4rem;
  right: 0.4rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const TrashIcon = styled.svg`
  &:hover {
    line {
      stroke: purple;
    }
  }
`;

export const LogImg = styled.img`
  width: 100%;
  height: 100%;
  background: #fff;
`;

export const LogImgContainer = styled.div`
  width: 300px;
  min-height: 240px;
  margin-bottom: 1em;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 300px;
    width: 340px;
  }
  @media screen and (max-width: 480px) {
    //height: 300px;
    width: 320px;
  }
`;

export const LogContent = styled.div`
  padding: 0 0.5em;
`;

export const LogH2 = styled.span`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  text-align: left;
  font-weight: 500;
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
  margin-bottom: 1.2rem;
  color: #121b74;
  font-weight: 600;
`;

export const NameNtime = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.4rem;
`;

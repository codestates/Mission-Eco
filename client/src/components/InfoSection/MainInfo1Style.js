import styled, { keyframes } from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const InfoContainer = styled.div`
  background-color: #fefbf3;
`;

export const InfoWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 0 0;
  align-items: center;

  @media screen and (max-width: 1120px) {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const InfoRow = styled.div`
  text-align: center;
`;

export const Row1 = styled.div`
  margin: 0 auto;
`;

export const Row2 = styled.div`
  position: relative;
`;

export const Slider = styled.div`
  overflow: hidden;
  margin: 4rem 0;
`;

const slide = keyframes`
  0%{transform: translateX(0)}
  100%{transform: translateX(calc(-300px * 8));}
`;

export const SliderBox = styled.div`
  display: flex;
  width: calc(300px * 16);
  margin: 0 10px;
  animation: ${slide} 60s ease-out infinite;
`;

export const SlideItem = styled.div`
  width: 280px;
  height: 340px;
  box-sizing: border-box;
  margin-right: 1rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  text-align: center;
  padding-top: 100px;
`;

export const TopLine = styled.p`
  color: #9dbfa5;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  line-height: 2.6rem;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.p`
  margin-top: 10px;
  color: #555;
`;

export const BtnWrap = styled.div`
  padding: 2rem 0 6rem;
`;

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#9dbfa5" : "#0106")};
  padding: 14px 38px;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    border: 2px solid #9dbfa5;
  }
`;

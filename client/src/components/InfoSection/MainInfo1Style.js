import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const InfoContainer = styled.div``;

export const InfoWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

export const InfoRow = styled.div`
  /* border: 1px solid red; */
  text-align: center;
`;

export const Row1 = styled.div`
  margin: 0 auto;
  /* border: 1px solid blue; */
`;

export const Row2 = styled.div`
  /* border: 1px solid green; */
  position: relative;
`;

export const Slider = styled.div`
  border: 2px solid red;
  overflow: hidden;
  margin: 50px 0;
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
  width: 300px;
  height: 300px;
  background: #eee;
  border: 4px solid green;
  box-sizing: border-box;
`;

export const Img = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.img}) no-repeat center/cover`};
  background-color: red;
`;

export const TextWrapper = styled.div`
  text-align: left;
  padding-top: 100px;
`;

export const TopLine = styled.p`
  color: #9dbfa5;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  line-height: 2.6rem;
`;

export const Subtitle = styled.p`
  margin-top: 10px;
  color: #555;
`;

export const BtnWrap = styled.div`
  margin: 0 0 150px;
`;
export const ButtonR = styled(Link)`
  padding: 1rem;
  background-color: #9dbfa5;
  border-radius: 4px;
`;

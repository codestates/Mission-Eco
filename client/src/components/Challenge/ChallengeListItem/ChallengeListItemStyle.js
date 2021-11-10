import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: z-index 500ms, transform 500ms;
  z-index: 0;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  transform-style: preserve-3d;
  &.flipped {
    z-index: 1;
  }
  width: 280px;
  height: 340px;
  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 300px;
  }
  /* @media screen and (max-width: 768px) {
    width: 340px;
    height: 400px;
  } */
  @media screen and (max-width: 480px) {
    width: 340px;
    height: 400px;
  }
`;

export const CardInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &.flipped {
    transform: rotateY(180deg);
  }
`;

export const ChallengeCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  width: 280px;
  height: 340px;
  //padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  background: ${(props) => props.background || "white"};
  z-index: 0;
  transform: rotateY(0deg);

  @media screen and (max-width: 1200px) {
    width: 220px;
    height: 300px;
  }
  /* @media screen and (max-width: 768px) {
    width: 340px;
    height: 400px;
  } */
  @media screen and (max-width: 480px) {
    width: 340px;
    height: 400px;
  }
`;

export const ChallengeImg = styled.img`
  height: 100%;
  width: 100%;
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

export const ChallengeH3 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
`;

export const ChallengeP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const LikeConatainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: -0.5rem;
  display: flex;
  text-align: right;
  padding: 0.8em;
  margin-right: 0.5rem;
`;

export const DetailCard = styled.div`
  background: #dbe6fd;
  display: flex;
  flex-direction: column;
  //justify-content: flex-start;
  justify-content: center;
  align-items: center;
  border-radius: 0px;
  width: 280px;
  height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  z-index: 1;
  transform: rotateY(180deg);
  @media screen and (max-width: 768px) {
    width: 340px;
    height: 400px;
  }
`;

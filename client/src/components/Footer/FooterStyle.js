import styled from "styled-components";

export const ServicesContainer = styled.div`
  /* background-color: #5d8767; */
  /* background-color: #9dbfa5; */
  background-color: #3d6887;
  display: flex;
  /* margin: 20em auto 0; */
  padding: 3em;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Title = styled.h1`
  align-items: center;
  display: flex;
  margin: 30px;
  color: #fff;
  font-size: 3em;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Icon = styled.img`
  display: flex;
  align-items: center;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 70px 0;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const ServicesCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 5em;
  /* 
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  } */
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
`;

export const Position = styled.p`
  display: flex;
  align-items: center;
`;

export const GithubBadge = styled.img`
  display: flex;
  align-items: center;
`;

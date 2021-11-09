import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: ${({ loaded }) => (loaded ? "none" : "")};
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`;

const LoadingIndicator = ({ loaded }) => {
  return (
    <Container>
      <Img alt="now loading" src="/gif/ms.gif" />
    </Container>
  );
};

export default LoadingIndicator;

import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100vh;
  margin: 0 auto;
`;
export const Img = styled.img`
  width: 100%;
`;

const LandingLoad = (props) => {
  return (
    <Container>
      <Img alt="now loading" src="/gif/LandingLoad.gif" />
    </Container>
  );
};

export default LandingLoad;

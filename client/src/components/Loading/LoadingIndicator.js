import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  display: ${({ loaded }) => (loaded ? "none" : "")};
`;

const LoadingIndicator = ({ loaded }) => {
  return <Img alt="now loading" src="gif/ms.gif" />;
};

export default LoadingIndicator;

import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
export const Img = styled.img`
  display: ${({ loaded }) => (loaded ? "none" : "")};
`;

const LoadingIndicator = ({ loaded }) => {
  return <Img alt="now loading" src="gif/ms.gif" />;
=======
export const Img = styled.img``;

const LoadingIndicator = (props) => {
  return <Img alt="now loading" src="ms.gif" />;
>>>>>>> 73b9a3d37efd0c11fdee804f92df6f7f83762ec7
};

export default LoadingIndicator;

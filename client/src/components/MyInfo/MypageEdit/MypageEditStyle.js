import styled from "styled-components";
import blob1 from "../../../imges/blob1.svg";

export const MypageEditContainer = styled.div`
  padding: 10em;
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
  }

  background-image: url(${blob1});
  height: 100%;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
`;

export const MypageEditWrap = styled.div`
  justify-content: center;
  background-color: whitesmoke;
  border: 3px solid gray;
  border-radius: 10px;

  padding: 20px;
  margin: 5px;
`;

export const TitleH1 = styled.h1``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleH3 = styled.h3`
  margin: 1em;
`;
export const Input = styled.input`
  margin: 1em;
`;
export const Span = styled.span``;
export const P = styled.p``;
export const Btn = styled.button`
  margin: 1em;
`;

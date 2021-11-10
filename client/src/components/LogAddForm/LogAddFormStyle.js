import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  width: 27rem;
  flex-wrap: wrap;
  //border-top: 1px solid black;
  //border-left: 1px solid black;

  margin: 2em;
  @media screen and (max-width: 768px) {
    margin-top: 1em;

    width: 27.2em;
    height: 360px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 1em;
    margin: 0.5em;
    width: 20.2em;
    height: 400px;
  }
`;
export const Input = styled.input`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid #234b68;
  //border-right: 1px solid black;
  background: white;
  opacity: 80%;
  //flex: 1 1 30%;
`;
export const Select = styled.select`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid #234b68;
  //border-right: 1px solid black;
  background: #fff;
  opacity: 80%;
  //flex: 1 1 30%;
`;

export const FileInput = styled.input`
  display: none;
  background-repeat: no-repeat;
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #234b68;
  // border-right: 1px solid black;
  background: white;
  opacity: 100;
  padding: 0px;
  //flex: 1 1 50%;
  cursor: pointer;
`;

export const ImgSelect = styled.div`
  height: 150px;
`;

export const ClickImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  border: 0;
  padding: 0.5em;
  // border-bottom: 1px solid black;
  //border-right: 1px solid black;
  background: white;
  cursor: pointer;

  :hover {
    background: #ffa928;
    color: #010606;
    font-size: 18px;
    outline: none;
  }
`;

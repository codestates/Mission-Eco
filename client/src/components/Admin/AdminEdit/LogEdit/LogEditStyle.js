import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 40px;
  background-color: #9dbfa5;
  border-radius: 25px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  margin-bottom: 2em;
`;
export const Input = styled.input`
  width: 20rem;
  height: 2.5rem;
  margin-right: 10px;
`;
export const Btn = styled.button`
  width: 3rem;
  font-size: 16px;
  border: 0;
  outline: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
export const LogContainer = styled.ul`
  max-width: 1000px;

  //margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

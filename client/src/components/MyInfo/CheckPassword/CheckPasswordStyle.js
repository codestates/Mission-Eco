// Mypage에서 '수정하기'버튼 클릭하면 이동하는 페이지의 디자인
import styled from "styled-components";
// import { Link } from "react-router-dom";

export const CheckPasswordContainer = styled.div`
  background: whitesmoke;
  width: 60%;
  margin: 15px;
  padding: 20px;
  border: 3px solid gray;
  border-radius: 10px;
  overflow: hidden;

  margin: 15em;
  padding: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const Icon = styled(Link);

export const Title = styled.h1`
  padding: 0 0 1em 0;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputPassword = styled.input`
  padding: 10px;
  text-align: center;
`;

export const ErrMsg = styled.small``;

export const SubmitBtn = styled.button`
  margin: 5em 0 0 0;
  padding: 10px;
  border: solid #5d8767;
  border-radius: 50px;
  background: #5d8767;
  white-space: nowrap;
  padding: 5px 17px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #5d8767;
    font-size: 15px;
    font-weight: 600;
    border: solid #5d8767;
  }
`;

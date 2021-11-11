// Mypage에서 '수정하기'버튼 클릭하면 이동하는 페이지의 디자인
import styled from "styled-components";
// import { Link } from "react-router-dom";
import blob1 from "../../../imges/blob1.svg";

export const CheckPasswordContainer = styled.div`
  padding: 10em 0 20em 0;
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
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 10em 30px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const CheckPasswordWrap = styled.div`
  justify-content: center;
  background-color: whitesmoke;
  border: 3px solid gray;
  border-radius: 10px;
  padding: 100px;
  width: 700px;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    padding: 100px 90px;
  }
`;

// export const Icon = styled(Link);

export const Title = styled.h1`
  padding: 0 0 1.5em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
    padding: 0 0 1.5em 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 23px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const InputPassword = styled.input`
  padding: 10px;
  border: solid silver 3px;
  border-radius: 20px;
  text-align: center;
  width: 250px;
  height: 60%;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    border: solid silver 3px;
    border-radius: 20px;
    width: 200px;
    height: 40px;
    font-size: 17px;
  }
  @media screen and (max-width: 480px) {
    border: solid silver 3px;
    border-radius: 15px;
    width: 180px;
    height: 35px;
    font-size: 17px;
  }
`;

export const ErrMsg = styled.small`
  padding: 20px;
  text-align: center;
`;

export const SubmitBtn = styled.button`
  /* margin: 2em 0 0 0; */
  padding: 10px;
  border: solid #5d8767;
  border-radius: 50px;
  background: #5d8767;
  white-space: nowrap;
  padding: 5px 17px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #5d8767;
    font-size: 20px;
    font-weight: 600;
    border: solid #5d8767;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    &:hover {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
    &:hover {
      font-size: 15px;
    }
  }
`;

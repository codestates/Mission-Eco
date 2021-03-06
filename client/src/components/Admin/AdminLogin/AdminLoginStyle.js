import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 70%;
  margin: 8em auto;
  text-align: center;
  position: relative;
  /* border: 1px solid; */
  @media screen and (max-width: 1350px) {
    width: 80%;
  }
  @media screen and (max-width: 980px) {
    width: 100%;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const FormWrap = styled.div`
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 1.5rem 0 1rem;
  border-radius: 50%;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 180%; // 이미지로 바뀌면 수정
  text-decoration: none;
  color: #fff;
  @media screen and (max-width: 480px) {
    /* margin-left: 16px; */
  }
`;

export const FormContent = styled.div`
  width: 510px;
  margin: 1rem auto 0;
  padding: 1.2rem 2.5rem 0;
  @media screen and (max-width: 480px) {
    // 테스트하고 480으로 바꾸기
    width: 100%;
  }
`;

export const Form = styled.div`
  @media screen and (max-width: 480px) {
  }
`;

export const FormLabel = styled.label`
  display: block;
  text-align: left;
  color: #ccc;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 2rem;
  border: none;
  border-bottom: 1px solid #aaa;
`;

export const FormButton = styled.button`
  margin: 0 auto 0.4rem;
  display: block;
  width: 100%;
  height: 50px;
  background-color: #9dbfa5;
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    transition: 1s;
    color: black;
    cursor: pointer;
    background-color: white;
    border: 2px solid #9dbfa5;
  }
`;

export const Text = styled.span``;

export const GeneralLogin = styled.div`
  text-align: left;
  margin-bottom: 4rem;
`;
export const MissionLogo = styled.div`
  width: 100%;
  height: 100%;
  background: center/220% no-repeat url(${(props) => props.imgUrl});

  @media screen and (max-width: 480px) {
    /* margin-left: 16px; */
  }
`;

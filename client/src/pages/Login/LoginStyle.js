import styled from "styled-components";
import { Link } from "react-router-dom";

export const OauthBtn = styled.button`
  display: inline-block;
  background-color: transparent;
  width: 50px;
  height: 50px;
  margin-bottom: 0.4rem;
  margin-right: 2rem;
  border: 1px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
`;

export const Logo = styled.img`
  display: block;
  text-align: left;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

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

export const LeftTxt = styled.p`
  position: absolute;
  color: #a5e464;
  font-size: 2.4rem;
  top: 30%;
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
  @media screen and (max-width: 1350px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 980px) {
    left: 1.2rem;
  }
  @media screen and (max-width: 750px) {
    top: 3000%; // 글씨를 화면 밖으로 보내기
  }
`;

export const RightTxt = styled.p`
  position: absolute;
  top: 30%;
  right: 0;
  text-align: left;
  color: #a5e464;
  font-size: 2.4rem;
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
  @media screen and (max-width: 1200px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 980px) {
    right: 1.2rem;
  }
  @media screen and (max-width: 750px) {
    top: 3000%; // 글씨를 화면 밖으로 보내기
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

export const FormH1 = styled.h1`
  font-size: 26px;
  font-weight: lighter;
  color: #333;
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
  background-color: #a5e464;
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  &:hover {
    transition: 1s;
    color: #fff;
    cursor: pointer;
    background-color: #74c025;
  }
`;

export const Text = styled.span``;

export const FormBtnBox = styled.div``;
export const BtnLink = styled(Link)`
  position: relative;
  text-decoration: none;
`;

export const LinkFindIdPwd = styled.span`
  color: #999;
  &:hover {
    transition: 1s;
    color: #333;
  }
`;

export const LinkSignUp = styled.span`
  display: float;
  color: #999;
  float: right;
  &:hover {
    transition: 1s;
    color: #333;
  }
`;

export const SocialLoigin = styled.div`
  margin: 1.4rem 0;
`;
export const GeneralLogin = styled.div`
  text-align: left;
  margin-bottom: 4rem;
`;
import React from "react";

const Login = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Mission Eco</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Pssword</FormLabel>
            <FormInput type="password" required />
            <Text>이메일 또는 비밀번호를 확인해주세요.</Text>
            <FormButton type="submit">입장하기!</FormButton>
            <FormBtnBox>
              <OauthBtn>구글로그인</OauthBtn>
              <OauthBtn>카카오로그인</OauthBtn>
            </FormBtnBox>
            <FormButton type="submit">회원가입</FormButton>
          </FormBtnBox>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Login;

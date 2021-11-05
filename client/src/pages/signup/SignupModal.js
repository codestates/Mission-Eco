import React from "react";
import { Link } from "react-router-dom";

import { 
    ModalBackground,
    CheckdImgBox,
    ModalView,
    Msg,
    LinkBtn,
    CheckdImg,
    CloseBtn,
} from "./SignupModalStyle";

import checkd from "../../imges/checked.png"

function SignupModal ({ openModalHandler }) {
  return (
    <ModalBackground>
        <ModalView >
        <CloseBtn onClick={openModalHandler}></CloseBtn>
            <CheckdImgBox><CheckdImg src={checkd}/></CheckdImgBox>
            <Msg><br/>회원가입이 <br/>성공적으로 완료되었습니다.</Msg>
            <LinkBtn style={{ marginRight: "10px"}}>
            <Link to="/" style={{ textDecoration: "none", color: "#333"}}>홈으로 가기</Link>
            </LinkBtn>
            <LinkBtn>
            <Link to="/login" style={{ textDecoration: "none", color: "#333"}}>로그인 하러가기</Link>
            </LinkBtn>
        </ModalView>
    </ModalBackground>
  )
}

export default SignupModal;
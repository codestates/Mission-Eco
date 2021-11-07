import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isOpenModal } from "../../Redux/actions";
import { Link } from "react-router-dom";
import checkd from "../../imges/checked.png";

import {
  ModalBackground,
  CheckdImgBox,
  ModalView,
  Msg,
  LinkBtn,
  CheckdImg,
  CloseBtn,
  BtnContainer,
} from "./ModalStyle";

const Modal = ({ msg, msg2, btnState, closeModalHandler }) => {
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.infoReducer.isOpenModal);
  console.log("modal.js", openModal);
  useEffect(() => {}, [openModal]);

  return (
    <ModalBackground>
      <ModalView>
        <CloseBtn onClick={closeModalHandler}></CloseBtn>
        <CheckdImgBox>
          <CheckdImg src={checkd} />
        </CheckdImgBox>
        <Msg>{msg}</Msg>
        <BtnContainer>
          {!btnState ? null : (
            <>
              <LinkBtn style={{ marginRight: "10px" }}>
                <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
                  홈으로 가기
                </Link>
              </LinkBtn>
              {msg2 ? (
                <LinkBtn>
                  <Link
                    to="/log"
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    {msg2}
                  </Link>
                </LinkBtn>
              ) : (
                <LinkBtn>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    로그인 하러가기
                  </Link>
                </LinkBtn>
              )}
            </>
          )}
        </BtnContainer>
      </ModalView>
    </ModalBackground>
  );
};

export default Modal;

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

const Modal = ({
  msg,
  msg2,
  link,
  uploadBtn,
  closeModalHandler,
  fileUploadHandler,
}) => {
  return (
    <ModalBackground>
      <ModalView>
        <CloseBtn onClick={closeModalHandler}></CloseBtn>
        <CheckdImgBox>
          <CheckdImg src={checkd} />
        </CheckdImgBox>
        <Msg>{msg}</Msg>
        {msg2 || uploadBtn ? (
          <BtnContainer>
            {uploadBtn ? (
              <LinkBtn
                style={{ marginRight: "10px" }}
                onClick={fileUploadHandler}
              >
                {uploadBtn}
              </LinkBtn>
            ) : (
              <>
                <LinkBtn style={{ marginRight: "10px" }}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                  >
                    홈으로 가기
                  </Link>
                </LinkBtn>

                <LinkBtn>
                  <Link
                    to={link}
                    style={{ textDecoration: "none" }}
                  >
                    {!msg2 ? "로그보러가기" : msg2}
                  </Link>
                </LinkBtn>
              </>
            )}
          </BtnContainer>
        ) : null}
      </ModalView>
    </ModalBackground>
  );
};

export default Modal;

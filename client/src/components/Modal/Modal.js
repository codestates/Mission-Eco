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
  userDeleteRequestHandler,
  isDeletedUser
}) => {

  return (
    <ModalBackground>
      <ModalView>
        {!isDeletedUser ? 
          <CloseBtn onClick={closeModalHandler}></CloseBtn> : 
          <Link to="/" style={{ textDecoration: "none" }}>
            <CloseBtn ></CloseBtn>
          </Link>
        }
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
        ) 
        : userDeleteRequestHandler ? 
        <BtnContainer>
        {isDeletedUser ? (
          <LinkBtn
            style={{ marginRight: "10px" }}
            onClick={fileUploadHandler}
          >
            <Link
              to="/"
              style={{ textDecoration: "none" }}
            >
              홈으로 가기
            </Link>
          </LinkBtn>
        ) : (
          <>
            <LinkBtn onClick={userDeleteRequestHandler} style={{ marginRight: "10px" }}>
              예
            </LinkBtn>
            <LinkBtn onClick={closeModalHandler}> 
              아니오
            </LinkBtn>
          </>
        )}
      </BtnContainer>
        : null}
      </ModalView>
    </ModalBackground>
  );
};

export default Modal;

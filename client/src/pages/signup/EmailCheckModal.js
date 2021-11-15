import React from "react";

import {
  ModalBackground,
  ModalView,
  Msg,
  LinkBtn,
  CloseBtn,
  CheckInput,
} from "./SignupModalStyle";

function EmailCheckModal({
  closeModalHandler,
  handelFormValue,
  verifyEmail,
  checkMsg,
}) {
  return (
    <ModalBackground>
      <ModalView>
        <CloseBtn onClick={closeModalHandler}></CloseBtn>
        <Msg>인증번호 6자리를 입력해주세요.</Msg>
        <CheckInput type="text" onChange={handelFormValue} />
        <LinkBtn onClick={verifyEmail}>인증번호 확인</LinkBtn>
        <Msg className="check">{checkMsg}</Msg>
      </ModalView>
    </ModalBackground>
  );
}

export default EmailCheckModal;

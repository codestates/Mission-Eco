import { useState } from "react";
import { Container, P, Btn } from "../Modal/ModalStyle";

// axios.defaults.withCredentials = true;

const Modal = () => {
  const [state, setState] = useState("땡땡");

  // ** handler 회원탈퇴 ---> 모달창 레이아웃부터 잡기
  // 회원탈퇴 버튼을 누르면 "확인 모달창"이 뜬다.
  // 모달창에서 "예" 버튼을 누르면 -> DB에서 내 정보가 삭제된다.
  // 함수 만들어서 버튼 누르면 axios로 요청 보내기 코드 작성. delete메소드 --> 요청부분까지만 일단 작성해두기
  // 응답--> 성공시 mypage-userInfo를 null로 바꿔야 한다. (리덕스) --> 같이
  const userDeleteRequestHandler = () => {
    console.log(state);
    // axios
    //   .delete(
    //     `${process.env.REACT_APP_API_URL}/mypage/userinfo`, // ! 여기 이렇게 작성하는 거 맞나요?
    //     { withCredentials: true } // ! 이건 넣어둬야하는 것 같아서 일단 안지움(뭔지 정확히 모름..)
    //   )
    //   .then((res) => {
    //     console.log(res.status);
    //     if (res.status === 201) {
    //       // 뭐 작성해야하는 지 모르겠음...
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      <Container>
        <P>정말 {state} 하시겠습니까?</P>
        <Btn type="submit">네</Btn>
        <Btn>아니오</Btn>
        {/* 아니오 누르면 모달창 닫혀야하는데 어떻게 구현? */}
      </Container>
    </>
  );
};

export default Modal;

import styled from "styled-components";

// 모달 백그라운드 
export const ModalBackground = styled.div`
  z-index: 1;
  /* position: relative; */
  /* border:2px solid red;
  background-color: blue; */

  ::before {
    content: "";
    position: absolute;
    display: block;
    z-index: 0;
    top:-100px; // 박스안에 갇힌 영역을 밖으로 밀어냄
    left:-300px;
    right:-276px;
    bottom:-200px;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const ModalView = styled.div`
  position: absolute;
  width: 400px;
  padding: 3rem 2rem 2rem;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  background-color: #efefef;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Msg = styled.h1`
  color: #333;
  font-size: 20px;
  margin-bottom: 2.8rem;
  /* line-height: 2rem; */
`

export const LinkBtn = styled.button`
  display: inline-block;
  width: 140px;
  padding: 0.6rem;
  box-sizing: border-box;
  background-color: #a5e464;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  
  &:hover {
    background-color: #fff;
  }
`

export const CheckdImg = styled.img`
display: inline-block;
width:100%;
height:100%;
`
export const CheckdImgBox = styled.div`
 width: 30px;
 height: 30px;
 margin: 0 auto;
`

export const CloseBtn = styled.div`
position: absolute;
cursor: pointer;
width: 40px;
height: 40px;
right:0;
top:-42px;

/* X모양의 버튼 만들기 */
::before {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 2px;
  top: 20px;
  background-color: #ccc;
  transform: rotate(135deg) translate(0%);
}

::after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 2px;
  top: 20px;
  background-color: #ccc;
  transform: rotate(45deg) translate(0%);
}
`
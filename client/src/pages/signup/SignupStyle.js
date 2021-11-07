import styled from "styled-components";

//
export const JoinRow = styled.div`

  > div {
    font-size: 12px;
    text-align: left;

    > div {

      > span.success-msg {
        color: green;
      }
    
      > span.fail-msg {
        color: red;
      }
    }
    
    > span.hide {
      display: none;
    }

    > span.fail-msg {
      color: red;
    }
  }

  > div.hide {
    display: none;
  }
`;

export const CheckButton = styled.div`
  background: #ffc947;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
`;

// 성공메지시 실패메시지 2개 모두처음에는 보이지 않고
// 입력이 될 때 실행 되어야함
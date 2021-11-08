// ! MyLogListItem용으로 수정해야함 (style.js도)
import React from "react";
import {
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./MyLogListItemStyle";

// svg 아이콘으로 변경하기
import { ReactComponent as TrashIcon } from "../../../../imges/iconmonstr-trash-can-1.svg"

const MyLogListItem = ({ list, HandleDeleteLog }) => {
  const { id, img, challengelog_contents, user_id } = list;
  
  return (
    <>
      <ServicesCard>
        <button
        onClick={() => HandleDeleteLog(id)}
        >
          <TrashIcon 
          fill="#333"
          />
        </button>
        {/* <ServicesIcon>{list.img}</ServicesIcon> */}
        <ServicesIcon background={img} />
        {/* ⬆ 이거 주석해제 하면 에러남 && styled문서 가서 보면, props.background 부분에 background 못 읽는 것으로 추정됨  */}
        <ServicesP>{challengelog_contents}</ServicesP>
        <ServicesP>{user_id}</ServicesP>
      </ServicesCard>
    </>
  );
};

export default MyLogListItem;

// ! MyLogListItem용으로 수정해야함 (style.js도)
import React from "react";
import {
  ServicesCard,
  ServicesIcon,
  // ServicesH2,
  ServicesP,
} from "./MyLogListItemStyle";

const MyLogListItem = ({ list }) => {
  console.log({ list });
  return (
    <>
      <ServicesCard>
        <p>나는 작성한 애들이야</p>
        {/* <ServicesIcon>{list.img}</ServicesIcon> */}
        <ServicesIcon background={list.img} />
        {/* ⬆ 이거 주석해제 하면 에러남 && styled문서 가서 보면, props.background 부분에 background 못 읽는 것으로 추정됨  */}
        <ServicesP>{list.challengelog_contents}</ServicesP>
        <ServicesP>{list.user_id}</ServicesP>
      </ServicesCard>
    </>
  );
};

export default MyLogListItem;

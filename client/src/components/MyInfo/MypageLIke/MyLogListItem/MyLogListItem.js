// ! MyLogListItem용으로 수정해야함 (style.js도)
import React from "react";
import {
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./MyLogListItemStyle";

const MyLogListItem = ({ list }) => {
  console.log({ list });
  return (
    <>
      <ServicesCard>
        <ServicesIcon background={list.img} />
        <ServicesH2>{list.challenge_id}</ServicesH2>
        <ServicesP>{list.challengelog_contents}</ServicesP>
        <ServicesP>{list.user_id}</ServicesP>
      </ServicesCard>
    </>
  );
};

export default MyLogListItem;

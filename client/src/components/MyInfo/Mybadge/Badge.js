import React from "react";
import { 
    BadgeContainer
 } from "./BadgeStyle"

function Badge({ badgeList, myBadgeIdList }) {
  const { id, name, img } = badgeList;
  console.log(' 뱃지 페이지: badgeList img url', img)

  // 내가 가진 뱃지라면 true 아니면 false
  const isMyBadge = myBadgeIdList.includes(id);
 
  return (
    <BadgeContainer>
        <div className={isMyBadge ? "colorOn" : "colorOff"}>
          <img src={img} alt={name+" 뱃지"}/>
        </div>
        <span className={isMyBadge ? "colorOn" : "colorOff"}>{name}</span>
    </BadgeContainer>
  )
}

export default Badge;
import React from "react";
import { 
    BadgeContainer,
    ImgBox
 } from "./BadgeStyle"

function Badge({ badgeList, myBadgeIdList }) {
  const { id, name, img } = badgeList;
  console.log('idididid', id)

  // 내가 가진 뱃지라면 true 아니면 false
  const isMyBadge = myBadgeIdList.includes(id);

  // 첫번째 이미지는 무조건 칼라로 변경하기!!
  // 그외의 이미지는 myBadgeIdsdml 에 있는 아이디면 칼라로 아니면 흑백으로 한다
 
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
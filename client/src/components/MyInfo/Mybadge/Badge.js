import React from "react";
import { 
    BadgeContainer,
    ImgBox
 } from "./BadgeStyle"

function Badge({ badge, myBadgeIds }) {
  const { id, name, img, challenge_id } = badge;
  
  // 내가 가진 뱃지라면 true 아니면 false
  const isMyBadge = myBadgeIds.includes(id);

  // 첫번째 이미지는 무조건 칼라로 변경
  // 그외의 이미지는 myBadgeIdsdml 에 있는 아이디면 칼라로 아니면 흑백으로 한다
  return (
    <BadgeContainer>
      {/* 첫번째 이미지 디폴트로 집어넣기 */}
        <div className={isMyBadge ? "colorOn" : "colorOff"}>
          <img src={img} alt={name+" 뱃지"}/>
        </div>
        <span>{name}</span>
    </BadgeContainer>
  )
}

export default Badge;
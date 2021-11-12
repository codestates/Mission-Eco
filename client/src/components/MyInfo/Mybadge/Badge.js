import React from "react";
import { BadgeContainer } from "./BadgeStyle";

function Badge({ badgeList, myBadgeList }) {
  const { id, name, img } = badgeList;
  const myBadgeId = myBadgeList.map((badge) => badge.badge_id);
  const myBadges = [1, ...myBadgeId];
  // 내가 가진 뱃지라면 true 아니면 false
  const isMyBadge = myBadges.includes(id);

  return (
    <BadgeContainer>
      <div>
        <img
          className={isMyBadge ? "colorOn" : "colorOff"}
          src={img}
          alt={name + " 뱃지"}
        />
      </div>
      <span className={isMyBadge ? "colorOn" : "colorOff"}>{name}</span>
    </BadgeContainer>
  );
}

export default Badge;

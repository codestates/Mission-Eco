import React, { useEffect } from "react";
import { getAllBadgeList, getMyBadgeList } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Badge from "./Badge";
import { BadgeWrapper } from "./BadgeStyle";

function MybadgeList() {
  const dispatch = useDispatch();

  // 현재 유저의 유저 아이디를 받아온다
  const userId = useSelector((state) => state.infoReducer.userInfo.id);
  const badgeLists = useSelector((state) => state.infoReducer.badgeList);
  const myBadgeList = useSelector((state) => state.infoReducer.myBadge);

  // 회원가입시 제공 뱃지(나는야 에코새싹왕, 뱃지아이디 1)는 기본값으로 저장
  //myBadgeList && myBadgeIdList.push(1);

  useEffect(() => {
    // 전체 뱃지리스트 저장
    dispatch(getAllBadgeList());
    // 현재 유저의 뱃지리트스트 저장 여기 디스패치가 안 바뀜
    dispatch(getMyBadgeList(userId));
  }, [dispatch]);

  return (
    <BadgeWrapper>
      {badgeLists &&
        badgeLists.map((badge) => (
          <Badge key={badge.id} badgeList={badge} myBadgeList={myBadgeList} />
        ))}
    </BadgeWrapper>
  );
}

export default MybadgeList;

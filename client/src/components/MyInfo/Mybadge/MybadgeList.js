import React, { useState, useEffect } from "react";
import { getAllBadgeList, getMyBadgeList} from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Badge from "./Badge";
import { BadgeWrapper } from "./BadgeStyle";

function MybadgeList() {

    const dispatch = useDispatch();

    // 현재 유저의 유저 아이디를 받아온다
    const userId = useSelector((state) => state.infoReducer.userInfo.id); 
    
    // 전체 뱃지 리스트
    const [ badgeLists, setBadgeLists ] = useState([]);

    // 유저 뱃지 리스트
    const [ myBadgeList, setMyBadgeList ] = useState([]);
    
    // 유저가 획득한 뱃지들의 아이디만 축출
    const myBadgeIds = myBadgeList.map(bg => bg.badge_id);

    useEffect(() => {
      // 전체 뱃지리스트 저장
      dispatch(getAllBadgeList()).then((res) => setBadgeLists(res));

      // 현재 유저의 뱃지리트스트 저장
      dispatch(getMyBadgeList(userId)).then((res) => setMyBadgeList(res));
    }, []);

    return (
        <BadgeWrapper>
          {badgeLists && badgeLists.map((badge) => <Badge key={badge.id} badge={badge} myBadgeIds={myBadgeIds}/>)}
        </BadgeWrapper>
    )
};

export default MybadgeList;
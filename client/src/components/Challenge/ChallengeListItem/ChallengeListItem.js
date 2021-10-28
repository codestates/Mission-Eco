import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Like from "../../Like/Like";

import axios from "axios";
import { ServicesCard, ServicesH2, ServicesP } from "./ChallengeListItemStyle";

const ChallengeListItem = ({ list }) => {
  const state = useSelector((state) => state.infoReducer);
  const [click, setClick] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost:4000/challenge/like", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("like", res);
        }
      });
  }, []);

  const isLogin = state.isLogin.isLogin;

  const handleLikeBtn = () => {
    //const userId = state.userInfo.id;
    const challengeId = list.id;
    if (!isLogin) {
      console.log("로그인후 이용해주세요.");
    } else {
      axios
        .post(
          "https://localhost:4000/challenge/like",
          {
            //좋아요 누른 챌린지 아
            challengeId,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.status === 201) {
            //유저가 좋아요를 누른후 서버에게 해당 유저 좋아요 눌렀음을 알려준다.
            //서버가 해당 유저와  해당 챌린지를 like테이블에 저장을 하고
            //like table을 클라에게 넘겨준다.
            //클라는 해당 라이크 테이블에서 userId, ChallengeId
            //유저인포에 좋아요한 챌린지 저장?
            //해당 챌린지가 이미 하트가 되어있으면 다시 클릭시 하트를 취소
            //언라이크 요청을 보냄
            console.log("likepost", res);
            setClick(!click);
          }
        });
    }
  };

  return (
    <ServicesCard background={list.img}>
      <ServicesH2>{list.name}</ServicesH2>
      <ServicesP></ServicesP>
      {/**로그인 안하고 하트 누르면 모달창
       * 로그인하고 하트 누르면 하트 바뀜
       */}

      <Like list={list} handleLikeBtn={handleLikeBtn} />
    </ServicesCard>
  );
};

export default ChallengeListItem;

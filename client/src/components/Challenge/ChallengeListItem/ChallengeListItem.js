import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import blackHeart from "../../../imges/blackHeart.png";
import colorHeart from "../../../imges/colorHeart.png";
import axios from "axios";
import {
  ServicesCard,
  ServicesH2,
  ServicesP,
  WishBtn,
  Img,
} from "./ChallengeListItemStyle";

const ChallengeListItem = ({ list }) => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const state = useSelector((state) => state.infoReducer);

  const [like, setLike] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const isLogin = state.isLogin.isLogin;

  const handleLikeBtn = () => {
    const userId = state.userInfo.id;
    const challengeId = list.id;
    if (!isLogin) {
      setErrMsg("로그인후 이용해주세요.");
    } else {
      axios
        .post(
          "https://localhost:4000/challenge/like",
          {
            challengeId,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.status === 204) {
            //유저가 좋아요를 누른후 서버에게 해당 유저 좋아요 눌렀음을 알려준다.
            //서버가 해당 유저와  해당 챌린지를 like테이블에 저장을 하고
            //like table을 클라에게 넘겨준다.
            //클라는 해당 라이크 테이블에서 userId, ChallengeId
            //유저인포에 좋아요한 챌린지 저장?
            //해당 챌린지가 이미 하트가 되어있으면 다시 클릭시 하트를 취소
            //언라이크 요청을 보냄
            console.log("like", res);
            setLike(!like);
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

      {!like ? (
        <WishBtn onClick={handleLikeBtn}>
          <Img src={blackHeart} />
          LIKE
        </WishBtn>
      ) : (
        <WishBtn onClick={handleLikeBtn}>
          <Img src={colorHeart} />
          LIKE OK
        </WishBtn>
      )}
      {errMsg}
    </ServicesCard>
  );
};

export default ChallengeListItem;

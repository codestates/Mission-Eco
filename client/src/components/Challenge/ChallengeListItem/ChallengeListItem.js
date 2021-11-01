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
          `${process.env.REACT_APP_API_URL}/challenge/like`,
          {
            challengeId,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.status === 204) {
            setLike(!like);
          }
        });
    }
  };

  return (
    <ServicesCard background={list.img}>
      {/* //! list컴포넌트에서 ChallengeListItem컴포넌트로 맵돌리고 있는 것임 */}
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

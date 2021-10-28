import axios from "axios";
import React, { useState, useEffect } from "react";
import blackHeart from "../../imges/blackHeart.png";
import colorHeart from "../../imges/colorHeart.png";
import { WishBtn, Img } from "./LikeStyle";

const Like = ({ list, handleLikeBtn }) => {
  //const [likeNum, setLikeNum] = useState(0);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const challengeId = list.id;
    axios
      .get("https://localhost:4000/challenge/like", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          //유저가 좋아요를 누른후 서버에게 해당 유저 좋아요 눌렀음을 알려준다.
          //서버가 해당 유저와  해당 챌린지를 like테이블에 저장을 하고
          //like table을 클라에게 넘겨준다.
          //클라는 해당 라이크 테이블에서 userId, ChallengeId
          //유저인포에 좋아요한 챌린지 저장?
          //해당 챌린지가 이미 하트가 되어있으면 다시 클릭시 하트를 취소
          //언라이크 요청을 보냄
          //좋아요 갯수 설정 setLikeNum
          console.log("like", res);
        }

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
          .then((res) => console.log("like-----", res));
      }, []);
  });

  const okHandler = () => {
    setOk(true);
  };

  return (
    <>
      {!ok ? (
        <WishBtn onClick={okHandler}>
          <Img src={blackHeart} />
          LIKE
          <span>좋아요갯수</span>
        </WishBtn>
      ) : (
        <WishBtn onClick={okHandler}>
          <Img src={colorHeart} />
          LIKE OK
          <span>좋아요갯수</span>
        </WishBtn>
      )}
    </>
  );
};

export default Like;

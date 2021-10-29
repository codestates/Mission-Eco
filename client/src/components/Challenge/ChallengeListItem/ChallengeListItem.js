import React, { useState, useEffect } from "react";
import Like from "../../Like/Like";

import axios from "axios";
import { ServicesCard, ServicesH2, ServicesP } from "./ChallengeListItemStyle";

const ChallengeListItem = ({ list, render, isLogin }) => {
  const [like, setlike] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const challengeId = list.id;
  console.log(list);
  useEffect(() => {
    if (list.challengelikes.length !== 0) {
      setlike(true);
    } else {
      setlike(false);
    }
  }, [list]);

  const toggleLike = async (e) => {
    const Alt = e.target.alt;
    if (!isLogin) {
      setIsOpenModal(true);
    } else if (Alt === "disliked") {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/challenge/like`,
        {
          challengeId,
        },
        {
          withCredentials: true,
        }
      );
      if (res.status === 201) {
        setlike(true);
        render();
      }
    } else {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/challenge/unlike`,
        {
          challengeId,
        },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        setlike(false);
        render();
      }
    }
  };

  return (
    <ServicesCard background={list.img}>
      <ServicesH2>{list.name}</ServicesH2>
      <ServicesP></ServicesP>
      {isOpenModal ? (
        <>
          <Like
            onClick={toggleLike}
            list={list}
            like={like}
            isLogin={isLogin}
          />
          "로그인이 필요합니다 모달창 ."
        </>
      ) : (
        <Like onClick={toggleLike} list={list} like={like} isLogin={isLogin} />
      )}
    </ServicesCard>
  );
};

export default ChallengeListItem;

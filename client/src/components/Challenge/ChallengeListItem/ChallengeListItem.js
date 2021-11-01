import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Like from "../../Like/Like";
import { addLike, deleteLike } from "../../../Redux/actions";
import { ServicesCard, ServicesH2, ServicesP } from "./ChallengeListItemStyle";

const ChallengeListItem = ({ list, userId, isLogin }) => {
  const dispatch = useDispatch();
  const [like, setlike] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const challengeId = list.id;

  useEffect(() => {
    const liked = list.challengelikes.map((el) => el.user_id);
    if (liked.includes(userId)) {
      setlike(true);
    } else {
      setlike(false);
    }
  }, [list, userId]);

  const toggleLike = async (e) => {
    const Alt = e.target.alt;
    if (!isLogin) {
      setIsOpenModal(true);
    } else if (Alt === "disliked") {
      dispatch(addLike(challengeId));
      /*
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
        console.log(res);
        setlike(true);
        render();
      }*/
    } else {
      dispatch(deleteLike(challengeId));
      setlike(false);
      /*
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
      }*/
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

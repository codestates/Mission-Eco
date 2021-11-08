import React from "react";

import { ReactComponent as HeartAdd } from "../../imges/HeartAdd.svg";
//import HeartDelete from "../../imges/HeartDelete.svg";
import { LikeNum } from "./LikeStyle";

const Like = ({ isLogin, like, onClick, likeNum }) => {
  return (
    <>
      {isLogin ? (
        <>
          {like ? (
            <>
              <HeartAdd
                id="liked"
                onClick={onClick}
                alt="liked"
                fill="#4E9F3D"
              />
              <LikeNum>{likeNum}</LikeNum>
            </>
          ) : (
            <>
              <HeartAdd
                id="disliked"
                src={HeartAdd}
                onClick={onClick}
                alt="disliked"
                fill="none"
                strokeWidth="2"
                stroke="#4E9F3D"
              />
              <LikeNum>{likeNum}</LikeNum>
            </>
          )}
        </>
      ) : (
        <>
          <HeartAdd
            onClick={onClick}
            alt="disliked"
            fill="none"
            strokeWidth="2"
            stroke="#4E9F3D"
          />
          <LikeNum>{likeNum}</LikeNum>
        </>
      )}
    </>
  );
};

export default Like;

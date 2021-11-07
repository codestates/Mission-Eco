import React from "react";
import blackHeart from "../../imges/blackHeart.png";
import colorHeart from "../../imges/colorHeart.png";
import { Img } from "./LikeStyle";

const Like = ({ isLogin, like, onClick, likeNum }) => {
  return (
    <>
      {isLogin ? (
        <div>
          {like ? (
            <Img src={colorHeart} onClick={onClick} alt="liked" />
          ) : (
            <Img src={blackHeart} onClick={onClick} alt="disliked" />
          )}
          <h3>Eco Like!</h3>
        </div>
      ) : (
        <div>
          <Img src={blackHeart} onClick={onClick} alt="disliked" />
          <span>{likeNum}</span>
        </div>
      )}
    </>
  );
};

export default Like;

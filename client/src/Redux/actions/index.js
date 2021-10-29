import axios from "axios";

export const IS_LOGIN = "IS_LOGIN";
export const USER_SIGNIN = "USER_SIGNIN";
export const USER_SIGNOUT = "USER_SIGNOUT";
export const USER_INFO = "USER_INFO";
export const DELETE_USERINFO = "DELETE_USERINFO";
export const IS_LOADING = "IS_LOADING";
export const IS_OPEN_MODAL = "IS_OPEN_MODAL";
export const CHALLENGE_INFO = "CHALLENGE_INFO";
export const CHALLENGE_LOG_LIST = "CHALLENGE_LOG_LIST";
export const USER_LIKE_LIST = " USER_LIKE_LIST";

export function isLogin(boolean) {
  return {
    type: IS_LOGIN,
    payload: {
      boolean,
    },
  };
}

export function getUserInfo(userInfo) {
  return {
    type: USER_INFO,
    payload: {
      userInfo,
    },
  };
}

export function deleteUserInfo(userInfo) {
  return {
    type: DELETE_USERINFO,
    payload: {
      userInfo,
    },
  };
}

// 닉네임 변경 관련 함수 만들어줘야 할 것 같은데 type 부분에 뭐라 적어야 할지 모르겠음. 일단 주석처리.
// export function changeUserNick(userInfo) {
//   return {
//     type: DELETE_USERINFO,
//     payload: {
//       userInfo: null,
//     },
//   };
// }

export function isLoading(boolean) {
  return {
    type: IS_LOADING,
    payload: {
      isLoading: boolean,
    },
  };
}

export function isOpenModal(boolean) {
  return {
    type: IS_OPEN_MODAL,
    payload: {
      isOpenModal: boolean,
    },
  };
}

export function getChallengeInfo(challengeInfo) {
  return {
    type: CHALLENGE_INFO,
    payload: {
      challengeInfo,
    },
  };
}

export function getChallengeLogList(logList) {
  return {
    type: CHALLENGE_LOG_LIST,
    payload: {
      logList,
    },
  };
}

export function getUserLikeList(likeList) {
  return {
    type: USER_LIKE_LIST,
    payload: {
      likeList,
    },
  };
}

export const userSignin = (loginInfo) => async (dispatch) => {
  const { email, password } = loginInfo;
  const data = await axios
    .post(
      `${process.env.REACT_APP_API_URL}/user/signin`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      if (res.status === 204) {
        return true;
      }
    })
    .catch((err) => console.log(err));

  // dispatch({ type: IS_LOGIN, payload: data });
  dispatch({ type: IS_LOGIN, payload: data });
};

export const userSignout = () => async (dispatch) => {
  const data = await axios
    .post(`${process.env.REACT_APP_API_URL}/user/logout`, {
      withCredentials: true,
    })
    .then((res) => {
      if (res.status === 205) {
        return false;
      }
    });
  console.log(data);
  dispatch({ type: IS_LOGIN, payload: data });
};

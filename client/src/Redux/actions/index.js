import axios from "axios";

export const IS_LOGIN = "IS_LOGIN";
export const IS_TOGGLE = "IS_TOGGLE";
export const USER_SIGNIN = "USER_SIGNIN";
export const USER_SIGNOUT = "USER_SIGNOUT";
export const USER_INFO = "USER_INFO";
export const DELETE_USERINFO = "DELETE_USERINFO";
export const IS_LOADING = "IS_LOADING";
export const IS_OPEN_MODAL = "IS_OPEN_MODAL";
export const CHALLENGE_INFO = "CHALLENGE_INFO";
export const CHALLENGE_LIST = "CHALLENGE_LIST";
export const CHALLENGE_LOG_LIST = "CHALLENGE_LOG_LIST";
export const USER_LIKE_LIST = "USER_LIKE_LIST";
export const IS_LIKE = "IS_LIKE";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const ADMIN_LOG = "ADMIN_LOG";
export const ADMIN_CHALLENGE = "ADMIN_CHALLENGE";

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
    type: USER_INFO,
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

export function isToggle(boolean) {
  return {
    type: IS_TOGGLE,
    payload: {
      isToggle: boolean,
    },
  };
}

export function isOpenModal(boolean) {
  console.log(boolean);
  return {
    type: IS_OPEN_MODAL,
    payload: boolean,
  };
}

// function이랑 const랑 어떤차이인지 본다음에
// 로그 리스트를 지우는 fuction 만들기
export function getChallengeInfo(challengeInfo) {
  return {
    type: CHALLENGE_INFO,
    payload: {
      challengeInfo,
    },
  };
}

export const addLike = (challengeId) => async (dispatch) => {
  const like = await axios
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
      if (res.status === 201) {
        return res.data.challengeList;
      }
    });
  dispatch({ type: CHALLENGE_LIST, payload: like });
};

export const deleteLike = (challengeId) => async (dispatch) => {
  const unlike = await axios
    .post(
      `${process.env.REACT_APP_API_URL}/challenge/unlike`,
      {
        challengeId,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        return res.data.challengeList;
      }
    });
  dispatch({ type: CHALLENGE_LIST, payload: unlike });
};

export const getChallengeList = () => async (dispatch) => {
  const list = await axios
    .get(`${process.env.REACT_APP_API_URL}/challenge`, {
      withCredentials: true,
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data.data;
      }
    });

  return dispatch({ type: CHALLENGE_LIST, payload: list });
};

export const getChallengeLogList = () => async (dispatch) => {
  const logList = await axios
    .get(`${process.env.REACT_APP_API_URL}/challenge-log`, {
      withCredentials: true,
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    });

  return dispatch({ type: CHALLENGE_LOG_LIST, payload: logList });
};

export function getUserLikeList(likeList) {
  return {
    type: USER_LIKE_LIST,
    payload: {
      likeList,
    },
  };
}
export const adminSignin = (loginInfo) => async (dispatch) => {
  try {
    const { email, password } = loginInfo;
    const data = await axios
      .post(
        `${process.env.REACT_APP_API_URL}/admin/signin`,
        { email, password },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.status === 204) {
          return true;
        }
        return false;
      });
    dispatch({ type: IS_LOGIN, payload: data });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const adminList = () => async (dispatch) => {
  try {
    const adminListData = await axios
      .get(`${process.env.REACT_APP_API_URL}/admin/list`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      });
    dispatch({ type: ADMIN_LOG, payload: adminListData.logList });
    dispatch({ type: ADMIN_CHALLENGE, payload: adminListData.challengeList });
  } catch (error) {
    console.log(error);
  }
};
export const deleteLog = (id) => async (dispatch) => {
  try {
    const deleteLogData = await axios
      .delete(`${process.env.REACT_APP_API_URL}/admin/challenge-log/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data.logList;
        }
      });
    dispatch({ type: ADMIN_LOG, payload: deleteLogData });
  } catch (error) {
    console.log(error);
  }
};

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
      } else {
        return false;
      }
    })
    .catch((err) => console.log(err));

  dispatch({ type: IS_LOGIN, payload: data });
  return data;
};

export const userLogout = () => async (dispatch) => {
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

export const userSignout = () => async (dispatch) => {
  const data = await axios
    .delete(`${process.env.REACT_APP_API_URL}/mypage/userinfo`, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.status);
      if (res.status === 204) {
        return false;
      }
    })
    .catch((err) => console.log(err));
  dispatch({ type: IS_LOGIN, payload: data });
};

export const authSuccess = () => async (dispatch) => {
  const data = await axios
    .get(`${process.env.REACT_APP_API_URL}/mypage/auth`, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        return res.data.userInfo;
      }
      console.log(res.data.userInfo);
    });
  dispatch({ type: IS_LOGIN, payload: true });
  dispatch({ type: USER_INFO, payload: data });
  return data;
  //console.log("auth", res.data.data.userInfo);
  //isAuthenticated(res.data.data.userInfo);
};

// 클릭된 logId를 주고 myloglist에서 지우도록 서버에 요청
export const deleteUserLog = (logId) => async (dispatch) => {
  await axios
    .delete(`${process.env.REACT_APP_API_URL}/challenge-log/${logId}`)
    .then((res) => {
      if (res.status === 204) {
        return;
      }
    })
    .catch((err) => console.log(err));
};

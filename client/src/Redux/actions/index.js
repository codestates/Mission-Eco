export const IS_LOGIN = "IS_LOGIN";
export const USER_INFO = "USER_INFO";
export const DELETE_USERINFO = "DELETE_USERINFO";
export const IS_LOADING = "IS_LOADING";
export const IS_OPEN_MODAL = "IS_OPEN_MODAL";
export const CHALLENGE_INFO = "CHALLENGE_INFO";
export const POSTCARD_INFO = "POSTCARD_INFO";

export function isLogin(boolean) {
  return {
    type: IS_LOGIN,
    payload: {
      isLogin: boolean,
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
      userInfo: {
        id: userInfo,
        email: userInfo,
        nickname: userInfo,
        point: userInfo,
        admin: userInfo,
      },
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

export function getPostcardInfo(postcadInfo) {
  return {
    type: POSTCARD_INFO,
    payload: {
      postcadInfo,
    },
  };
}

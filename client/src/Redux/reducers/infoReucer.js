/*eslint-disable */
import {
  IS_LOGIN,
  USER_SIGNIN,
  USER_INFO,
  DELETE_USERINFO,
  IS_LOADING,
  IS_OPEN_MODAL,
  CHALLENGE_INFO,
  CHALLENGE_LIST,
  CHALLENGE_LOG_LIST,
  USER_LIKE_LIST,
  IS_LIKE,
  BADGE_LIST,
  IS_TOGGLE,
  ADMIN_LOG,
  ADMIN_CHALLENGE,
  MY_BADGE_LIST,
} from "../actions/index";

import { initialState } from "./initialState";

const infoReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case USER_SIGNIN:
      return { ...newState, userSignin: action.payload };
      break;
    case IS_LOGIN:
      return { ...newState, isLogin: action.payload };
      break;
    case IS_TOGGLE:
      return { ...newState, isToggle: action.payload.isToggle };
      break;
    case USER_INFO:
      return { ...newState, userInfo: action.payload };
      break;
    case DELETE_USERINFO:
      return { ...newState, userInfo: action.payload };
      break;
    case IS_LOADING:
      return { ...newState, isLoading: action.payload.isLoading };
    case IS_OPEN_MODAL:
      return { ...newState, isOpenModal: action.payload };
    case CHALLENGE_INFO:
      return { ...newState, challengeInfo: action.payload };
      break;
    case CHALLENGE_LIST:
      return { ...newState, challengeList: action.payload };
      break;
    case CHALLENGE_LOG_LIST:
      return { ...newState, challengeLogList: action.payload };
      break;
    case USER_LIKE_LIST:
      return { ...newState, userLikeList: action.payload };
      break;
    case IS_LIKE:
      return { ...newState, isLike: action.payload };
      break;
    case ADMIN_LOG:
      return { ...newState, adminLogList: action.payload };
      break;
    case ADMIN_CHALLENGE:
      return { ...newState, adminChallengeList: action.payload };
      break;
    case BADGE_LIST:
      return { ...newState, badgeList: action.payload };
      break;
    case MY_BADGE_LIST:
      return { ...newState, myBadge: action.payload };
      break;
    default:
      return state;
  }
};
export default infoReducer;

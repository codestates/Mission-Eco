import {
  IS_LOGIN,
  USER_INFO,
  DELETE_USERINFO,
  IS_LOADING,
  IS_OPEN_MODAL,
  CHALLENGE_INFO,
  POSTCARD_INFO,
} from "../actions/index";
import { initialState } from "./initialState";

const infoReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case IS_LOGIN:
      return { ...newState, isLogin: action.payload };
    case USER_INFO:
      return { ...newState, userInfo: action.payload.userInfo };
    case DELETE_USERINFO:
      return { ...newState, userInfo: action.payload.userInfo };
    case IS_LOADING:
      return { ...newState, isLoading: action.payload.isLoading };
    case IS_OPEN_MODAL:
      return { ...newState, isOpenModal: action.payload.isOpenModal };
    case CHALLENGE_INFO:
      return { ...newState, challengeInfo: action.payload };
    case POSTCARD_INFO:
      return { ...newState, postcardInfo: action.payload };
    default:
      return state;
  }
};
export default infoReducer;

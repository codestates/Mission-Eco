import { combineReducers } from "redux";
import userReducer from "./userReducer";
import clothesReducer from "./clothesReducer";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;

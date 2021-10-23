import { combineReducers } from "redux";
import infoReducer from "./infoReucer";

const rootReducer = combineReducers({
  infoReducer,
});

export default rootReducer;

import counterReducer from "./counterReducer";
import isVisibleReducer from "./isVisibleReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter : counterReducer,
  isVisible : isVisibleReducer,
})

export default rootReducer;
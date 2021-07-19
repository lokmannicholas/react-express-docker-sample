import { combineReducers } from "redux";

import Plan from "./plan/reducer";

const rootReducer = combineReducers({
  // public
  Plan,
});

export default rootReducer;

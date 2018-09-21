import { combineReducers } from "redux";

import currencyReducer from "./currencyReducer";
import flagReducer from "./flagReducer";

const rootReducer = combineReducers({
  currency: currencyReducer,
  flag: flagReducer
});

export default rootReducer;

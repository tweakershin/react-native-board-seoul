import { createStore, combineReducers } from "redux";

import boardApp from "./board/reducers";

const appReducer = combineReducers({
  boardApp: boardApp
});
const store = createStore(appReducer);

export default store;

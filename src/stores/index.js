import { createStore, combineReducers } from "redux";

import boardApp from "./board/reducers";

const appReducer = combineReducers({
  board: boardApp
});
const store = createStore(appReducer);

export default store;

import {combineReducers} from "redux";
import commentsReducers from "./comments";

const reducers = combineReducers({
  comments: commentsReducers
});

export default reducers;
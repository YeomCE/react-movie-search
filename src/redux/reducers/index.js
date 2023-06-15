import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import stateReducer from "./stateReducer";

export default combineReducers({
    movie : movieReducer,
    state : stateReducer,
})
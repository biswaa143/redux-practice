import counterReducer from "./counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counterReducer
})

export default rootReducer;
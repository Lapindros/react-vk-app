import {pageReducer} from "./pageReducer";
import {userReducer} from "./userReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
});
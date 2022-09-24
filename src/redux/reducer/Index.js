import { combineReducers } from "redux";
import { alertReducer } from "./AlertReducer";
import { authReducer } from "./AuthReducer";

export const RootReducer = combineReducers({
    Auth : authReducer,
    Alert : alertReducer
})
import { combineReducers } from "redux";
import { AdminReducer } from "./AdminReducer";
import { alertReducer } from "./AlertReducer";
import { authReducer } from "./AuthReducer";

export const RootReducer = combineReducers({
    Auth : authReducer,
    Alert : alertReducer,
    admin : AdminReducer
})
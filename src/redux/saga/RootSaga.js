import { all } from "redux-saga/effects";
import { watchAuth } from "./AuthSaga";


export function* RootSaga(){
    yield all([watchAuth()])
}
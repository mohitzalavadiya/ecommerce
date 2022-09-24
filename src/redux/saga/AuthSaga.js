import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { GoogleUser, LoginUser, LogoutUser, SignUpuser } from "../../Api/ApiSaga";
import { loggedinAction, loggedoutAction } from "../action/AuthAction";
import * as ActionTypes from "../ActionType";

function* signUpSaga(action) {
    try {
      const user = yield call(SignUpuser, action.payload);
      yield put({
        type: ActionTypes.SET_ALERT,
        payload: { msg: user.payload, color: "success" },
      });
    } catch (e) {
      yield put({
        type: ActionTypes.SET_ALERT,
        payload: { msg: e, color: "error" },
      });
    }
  }

  function* Loginsaga(action) {
    try {
      const user = yield call(LoginUser, action.payload);
      yield put(loggedinAction(user));
      yield put({
        type: ActionTypes.SET_ALERT,
        payload: { msg: user.payload, color: "success" },
      });
    } catch (e) {
      yield put({
        type: ActionTypes.SET_ALERT,
        payload: { msg: e, color: "error" },
      });
    }
  }
  function* LogOutSaga() {
    try {
      const user = yield call(LogoutUser);
      yield put(loggedoutAction(user));
      yield put({
        type: ActionTypes.SET_ALERT,
        payload: { msg: user.payload, color: "success" },
      });
    } catch (e) {
      yield put({
        type: ActionTypes.SET_ALERT,
        payload: { msg: e, color: "error" },
      });
    }
  }

  function* GoogleSaga() {
    try {
      const user = yield call(GoogleUser);
      yield put(loggedinAction(user));
      yield put({
        type: ActionTypes.SET_ALERT,
        payload: { msg: user.payload, color: "success" },
      });
    } catch (e) {
      yield put({
        type: ActionTypes.SET_ALERT,
        payload: { msg: e, color: "error" },
      });
    }
  }

  function* watchsignUp() {
    yield takeEvery(ActionTypes.SIGNUP_USER, signUpSaga);
  }

  function* watchLogin() {
    yield takeEvery(ActionTypes.LOGIN_USER, Loginsaga);
  }

  function* watchLogout() {
    yield takeEvery(ActionTypes.LOGOUT_USER, LogOutSaga);
  }

  function* watchGoogle() {
    yield takeEvery(ActionTypes.GOOGLESIGNUP_USER, GoogleSaga);
  }

  export function* watchAuth() {
    yield all([
      watchsignUp(),  
      watchLogin(),
      watchLogout(),
      watchGoogle()
    ]);
  }
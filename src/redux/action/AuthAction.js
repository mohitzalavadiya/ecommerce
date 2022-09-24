import * as ActionTypes from '../ActionType'

export const SignupAction = (values) => (dispatch) => {
    dispatch({type : ActionTypes.SIGNUP_USER, payload : values})
}
export const LoginAction = (values) => (dispatch) => {
    dispatch({type : ActionTypes.LOGIN_USER, payload : values})
}
export const loggedinAction = () => (dispatch) =>{
    dispatch({type: ActionTypes.LOGGEDIN_USER})
}
export const logoutAction = () => (dispatch) =>{
    dispatch({type: ActionTypes.LOGOUT_USER})
}
export const loggedoutAction = () => (dispatch) =>{
    dispatch({type: ActionTypes.LOGGEDOUT_USER})
}
export const GoogleAction = () => (dispatch) => {
    dispatch({type : ActionTypes.GOOGLESIGNUP_USER})
}
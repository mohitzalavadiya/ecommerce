import * as ActionTypes from "../ActionType";

const initVal = {
  data: null,
};
export const authReducer = (state = initVal, action) => {
  switch (action.type) {   
    case ActionTypes.LOGGEDIN_USER:
      return {
        ...state,
        data: action.payload,
      };
    case ActionTypes.LOGGEDOUT_USER:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};
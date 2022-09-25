import * as ActionTypes from "../ActionType";

const initVal = {
  products: [],
};
export const AdminReducer = (state = initVal, action) => {
  switch (action.type) {
    case ActionTypes.READ_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    // case ActionTypes.ADD_PRODUCT:
    //   return {
    //     ...state,
    //     products: state.products.concat(action.payload),
    //   };
    // case ActionTypes.DELETE_PRODUCTS:
    //   return {
    //     ...state,
    //     products: state.products.filter((p) => p.id !== action.payload),
    //   };
    // case ActionTypes.EDIT_PRODUCTS:
    //   return {
    //     ...state,
    //     products: state.products.map((p) => {
    //       if (p.id === action.payload.id) {
    //         return action.payload;
    //       } else {
    //         return p;
    //       }
    //     }),
    //   };
    default:
      return state;
  }
};
import {SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_SUCCESS} from "../types";

const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type){
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        authError: action.payload
      }
    case SIGN_OUT_SUCCESS:
      console.log('Sign Out Success!');
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default authReducer;

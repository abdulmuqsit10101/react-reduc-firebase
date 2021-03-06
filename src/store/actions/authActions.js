import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT_SUCCESS } from '../types';

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    )
      .then(() => dispatch({
        type: SIGN_IN_SUCCESS
      }))
      .catch((err) => dispatch({
        type: SIGN_IN_FAILURE,
        payload: err
      }))
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut()
      .then(() => dispatch({
        type: SIGN_OUT_SUCCESS
      }))
  }
}

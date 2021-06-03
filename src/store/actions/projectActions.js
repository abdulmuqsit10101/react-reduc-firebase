import {CREATE_PROJECT} from '../types';

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    dispatch({
      type: CREATE_PROJECT,
      payload: project
    })
  }
}

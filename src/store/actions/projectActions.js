import {CREATE_PROJECT, CREATE_PROJECT_ERROR} from '../types';

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Nawab',
      authorLastName: 'Ali',
      authorId: 12344,
      createdAd: new Date()
    }).then(() => {
      dispatch({
        type: CREATE_PROJECT,
        payload: project
      })
    }).catch(err => {
      dispatch({
        type: CREATE_PROJECT_ERROR,
        payload: err
      })
    })

  }
}

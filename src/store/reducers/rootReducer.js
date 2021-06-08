import authReducer from './authReducer.js';
import projectReducer from './projectReducer.js';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export default rootReducer;

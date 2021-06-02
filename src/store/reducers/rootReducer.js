import authReducer from './authReducer.js';
import projectReducer from './ProjectReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
})

export default rootReducer;

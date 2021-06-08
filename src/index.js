import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './store/reducers/rootReducer.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import fbConfig from './config/fbConfig';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import {
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

// react-redux-firebase config
// const rrfConfig = {
//   userProfile: 'users',
//   useFirestoreForProfile: true
// }

const store = createStore(rootReducer, applyMiddleware(thunk))

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
  // createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

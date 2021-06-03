import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBqMZVtlJDeofKI6TMxSpB3vqZTws0nNhw",
  authDomain: "marioplan-fb841.firebaseapp.com",
  projectId: "marioplan-fb841",
  storageBucket: "marioplan-fb841.appspot.com",
  messagingSenderId: "977368582509",
  appId: "1:977368582509:web:84a3f1822eb000518d7264",
  measurementId: "G-7ZNC2F9J40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().setting({ timestampsInSnapshots: true })


export default firebase;

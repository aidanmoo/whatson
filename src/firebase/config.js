import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWcA8ZM9fowXeFiuWByucttqsr_41MDVU",
  authDomain: "whatsstreaming-98484.firebaseapp.com",
  projectId: "whatsstreaming-98484",
  storageBucket: "whatsstreaming-98484.appspot.com",
  messagingSenderId: "268357957117",
  appId: "1:268357957117:web:192e9180e340e6ddced594"
};

// init firebase

firebase.initializeApp(firebaseConfig);

//init service

const projectFirestore = firebase.firestore();

const projectAuth = firebase.auth();

//time stamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };

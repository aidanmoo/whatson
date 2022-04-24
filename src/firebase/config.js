import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import env from "react-dotenv";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZw75eoBZyj2IJ_7kTNtVTlhHGMMB9wZc",
  authDomain: "whats-a91b9.firebaseapp.com",
  projectId: "whats-a91b9",
  storageBucket: "whats-a91b9.appspot.com",
  messagingSenderId: "809442268651",
  appId: "1:809442268651:web:26c4fe7e28abc8bf2635ae",
  measurementId: "G-DT5ES833C7",
};

// init firebase

firebase.initializeApp(firebaseConfig);

//init service

const projectFirestore = firebase.firestore();

const projectAuth = firebase.auth();

//time stamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };

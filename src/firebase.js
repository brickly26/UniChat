import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCGer_Px0cS9JgYhF9WXwyvNRj9mjH1H_s",
  authDomain: "unichat-18a7d.firebaseapp.com",
  projectId: "unichat-18a7d",
  storageBucket: "unichat-18a7d.appspot.com",
  messagingSenderId: "43531643282",
  appId: "1:43531643282:web:6cac035eb594b3e44df94b"
}).auth();
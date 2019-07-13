import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBYgfl6CX3s0tpIi3Az8Bnp4EhiIZb4owI",
    authDomain: "crwn-db-7a027.firebaseapp.com",
    databaseURL: "https://crwn-db-7a027.firebaseio.com",
    projectId: "crwn-db-7a027",
    storageBucket: "",
    messagingSenderId: "817124634443",
    appId: "1:817124634443:web:5053f0f8e5e8de3b"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
export default firebase;

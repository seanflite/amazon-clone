import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaDWPdWHrYI8OqZXfPt2bHvFSetEZCmjA",
  authDomain: "clone-c608d.firebaseapp.com",
  projectId: "clone-c608d",
  storageBucket: "clone-c608d.appspot.com",
  messagingSenderId: "634433030039",
  appId: "1:634433030039:web:171106b005c55dc24ce6d2",
  measurementId: "G-FBPRKXS6H3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

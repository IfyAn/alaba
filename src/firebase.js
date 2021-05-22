import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6PUVgPhPjn6bgzeNCL_LYF55xcE2OY5U",
  authDomain: "alaba-82118.firebaseapp.com",
  projectId: "alaba-82118",
  storageBucket: "alaba-82118.appspot.com",
  messagingSenderId: "862333647153",
  appId: "1:862333647153:web:927eef8468bd2382015810",
  measurementId: "G-09S07ZN07Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
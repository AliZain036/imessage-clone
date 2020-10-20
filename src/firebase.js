import firebase from "firebase";

// const { REACT_APP_GOOGLE_AUTH_KEY } = proess.env;
const firebaseConfig = {
  apiKey: "AIzaSyBzoehPHOSuLK2SoKSGHwAT2XqKslCUkJA",
  authDomain: "imessage-clone-d5ca3.firebaseapp.com",
  databaseURL: "https://imessage-clone-d5ca3.firebaseio.com",
  projectId: "imessage-clone-d5ca3",
  storageBucket: "imessage-clone-d5ca3.appspot.com",
  messagingSenderId: "590525677617",
  appId: "1:590525677617:web:548a26a266ce8248999510",
  measurementId: "G-4VVQ6ELS4F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;
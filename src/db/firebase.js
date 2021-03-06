import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADWaIxKfNKNJeYpIKh5D3Jx9xXs_RVR9A",
    authDomain: "clone-4fc1c.firebaseapp.com",
    projectId: "clone-4fc1c",
    storageBucket: "clone-4fc1c.appspot.com",
    messagingSenderId: "170161312302",
    appId: "1:170161312302:web:5a9c15c7c02e19c773c5bf",
    measurementId: "G-1NZ3SQ3XZ6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
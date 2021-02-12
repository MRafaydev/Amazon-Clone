import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2B2h-OJKiqOvJiIIaeEP4wAifC0QTmGU",
    authDomain: "tinder-clone-5975b.firebaseapp.com",
    projectId: "tinder-clone-5975b",
    storageBucket: "tinder-clone-5975b.appspot.com",
    messagingSenderId: "781675488074",
    appId: "1:781675488074:web:d29858227e3f6e343a17b3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
  {
    apiKey: "AIzaSyB7Dtg-1qNxkGv-lNscLpcfmITtyCsgehg",
    authDomain: "coder-876b8.firebaseapp.com",
    projectId: "coder-876b8",
    storageBucket: "coder-876b8.appspot.com",
    messagingSenderId: "432517869838",
    appId: "1:432517869838:web:3dd5ac5ec4de45a0eae75f",
    measurementId: "G-CBNM9RL6E6"
  }
  )


 export const  getFirebase = () => {
    return app;
  }


  export const getFirestor = () => {
    return firebase.firestore();
  }
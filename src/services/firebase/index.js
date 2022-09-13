import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDmBA-lvsNbobmAV1bJ1r6YH8CM_uIK9Ns",
    authDomain: "e-commerce-3ac50.firebaseapp.com",
    projectId: "e-commerce-3ac50",
    storageBucket: "e-commerce-3ac50.appspot.com",
    messagingSenderId: "553513208617",
    appId: "1:553513208617:web:253136b6d107a889c60538",
    measurementId: "G-NERDXPQ602",
});

export const getFirebase = () => {
    return app;
};

//Para llamar a la base de datos

export const getFirestore = () => {
    return firebase.firestore();
};

//Llamar a servicio de autenticacion

export const auth = getAuth(app);
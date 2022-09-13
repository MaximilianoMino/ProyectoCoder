import { auth, getFirestore } from "../index";
import { addDoc, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const db = getFirestore();

export default class {
    async singInWithEmailAndPassword(userCredentials) {
        try {
            const { email, password, name, lastname } = userCredentials;
            let usersRef;
            let query;
            let generateUser;
            let res = await createUserWithEmailAndPassword(auth, email, password);
            let { user } = res;
            usersRef = db.collection("users");
            user = {
                email: user.email,
                password,
                name,
                lastname,
            };
            generateUser = await usersRef.add(user);
            return generateUser;
        } catch (error) {
            console.log(error);
        }
    }
}
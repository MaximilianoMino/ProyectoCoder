import { auth, getFirestore } from "./index";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const db = getFirestore();
export default class {
    async signInWithGoogle() {
        try {
            let googleProvider = new GoogleAuthProvider();

            let resPopup = await signInWithPopup(auth, googleProvider);

            let usersRef;
            let generateUser;
            let query;
            let { user } = resPopup;

            user = {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            };

            usersRef = db.collection("users");
            query = usersRef.where("uid", "==", user.uid);
            if (!query) {
                generateUser = await usersRef.add(user);
                return generateUser;
            } else {
                console.log("Ya existe un usuario creado con esta cuenta.");
            }

            console.log(usersRef.doc());
        } catch (err) {
            console.log(err);
        }
    }
}
import { auth, getFirestore } from "../index";
import { doc, setDoc } from "firebase/firestore";

import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const db = getFirestore();
export default class {
    async signInWithFacebook() {
        try {
            let facebookProvider = new FacebookAuthProvider();

            let usersRef;

            let res = await signInWithPopup(auth, facebookProvider);
            let { user } = res;
            user = [user.displayName, user.email];
            console.log(res);

            usersRef = doc(db, `users/${user.uid}`);

            await setDoc(usersRef, {
                uid: user.uid,
                name: user.displayName,
                authProvider: "facebook",
                email: user.email,
            });

            return user;
        } catch (err) {
            console.log(err);
        }
    }
}
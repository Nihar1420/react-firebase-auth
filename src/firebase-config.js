import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCUePaJi3_T9gJpD-d7OLyTH7bOkT2ywTw",
    authDomain: "react-firebase-auth-647e1.firebaseapp.com",
    projectId: "react-firebase-auth-647e1",
    storageBucket: "react-firebase-auth-647e1.appspot.com",
    messagingSenderId: "285120181496",
    appId: "1:285120181496:web:0940a00b601614acf8370d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const googleSignUp = async () => {
    try {
        const data = await signInWithPopup(auth, provider);
        return data;
    } catch (error) {
        console.log(error);
    }
};

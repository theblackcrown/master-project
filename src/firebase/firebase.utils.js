import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAaWNf6bEInDeCoNC2oOwfjZ4DZKTuBvlM",
    authDomain: "crwn-db-9d47f.firebaseapp.com",
    databaseURL: "https://crwn-db-9d47f.firebaseio.com",
    projectId: "crwn-db-9d47f",
    storageBucket: "",
    messagingSenderId: "144714433290",
    appId: "1:144714433290:web:3b74f4a3578d1750"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating useru', error.message);

        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
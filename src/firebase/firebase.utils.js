import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBI951qZxhZpjsZjmbin0d7F9rBZJk7OZc",
    authDomain: "clothing-db-953d5.firebaseapp.com",
    projectId: "clothing-db-953d5",
    storageBucket: "clothing-db-953d5.appspot.com",
    messagingSenderId: "328370774040",
    appId: "1:328370774040:web:b942380f70ba312d61236d",
    measurementId: "G-P080EWMK5J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
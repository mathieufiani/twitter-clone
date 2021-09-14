import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDEnXz2eNBJxRGFAIExIVQikhhGvLZfJFE",
    authDomain: "twitter-clone-458ba.firebaseapp.com",
    projectId: "twitter-clone-458ba",
    storageBucket: "twitter-clone-458ba.appspot.com",
    messagingSenderId: "19991048930",
    appId: "1:19991048930:web:a9d8cf99bdaeb4f3a724bb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
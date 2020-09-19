import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcu-lUnmYqfKpqAWu3LR2SZ-BFt8Dt30w",
    authDomain: "react-whatsapp-clone-5b73f.firebaseapp.com",
    databaseURL: "https://react-whatsapp-clone-5b73f.firebaseio.com",
    projectId: "react-whatsapp-clone-5b73f",
    storageBucket: "react-whatsapp-clone-5b73f.appspot.com",
    messagingSenderId: "426195343178",
    appId: "1:426195343178:web:6462f21353852716ab53b3",
    measurementId: "G-73K6KEVWK5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
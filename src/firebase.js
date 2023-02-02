// import firebase from "firebase";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDZ6pppNEFNz1dyTztsVQ_-UYpbxDRX9NM",
//     authDomain: "linkedin-clone-820a6.firebaseapp.com",
//     projectId: "linkedin-clone-820a6",
//     storageBucket: "linkedin-clone-820a6.appspot.com",
//     messagingSenderId: "961331836833",
//     appId: "1:961331836833:web:e890db8520573e8a89bde0",
//     measurementId: "G-1N0N8T836L"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };


// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';


// const firebaseConfig = { // Have the firebase config here

//     apiKey: "AIzaSyDZ6pppNEFNz1dyTztsVQ_-UYpbxDRX9NM",
//     authDomain: "linkedin-clone-820a6.firebaseapp.com",
//     projectId: "linkedin-clone-820a6",
//     storageBucket: "linkedin-clone-820a6.appspot.com",
//     messagingSenderId: "961331836833",
//     appId: "1:961331836833:web:e890db8520573e8a89bde0",
//     measurementId: "G-1N0N8T836L"
// };

// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };
// // export default firebaseApp;


// import * as firebase from 'firebase';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import {getAuth} from 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZ6pppNEFNz1dyTztsVQ_-UYpbxDRX9NM",
    authDomain: "linkedin-clone-820a6.firebaseapp.com",
    projectId: "linkedin-clone-820a6",
    storageBucket: "linkedin-clone-820a6.appspot.com",
    messagingSenderId: "961331836833",
    appId: "1:961331836833:web:e890db8520573e8a89bde0",
    measurementId: "G-1N0N8T836L"
};



// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth, db };
export default firebaseApp;
// export default firebase;

// firebase.initializeApp(firebaseConfig);
// firebase.firestore();

// export default firebase.auth;


// // import * as firebase from 'firebase';
// import { initializeApp } from "firebase/app";

// import {getFirestore, orderBy} from 'firebase/firestore'

// import {getAuth} from 'firebase/auth'


// const firebaseConfig = {
//     apiKey: "AIzaSyBcXJx4Q_qNeM-16i_J2i3cZXa5V0TllzE",
//     authDomain: "clone-c2b29.firebaseapp.com",
//     projectId: "clone-c2b29",
//     storageBucket: "clone-c2b29.appspot.com",
//     messagingSenderId: "1002953497126",
//     appId: "1:1002953497126:web:d66ce16145a3d22ba624e7",
//     measurementId: "G-71Z66TKR8B"
// };


// initializeApp(firebaseConfig)

// const db = getFirestore()

// const auth = getAuth()



// // // Use this to initialize the firebase App
// // const firebaseApp = firebase.initializeApp(firebaseConfig);

// // // Use these for db & auth
// // // const db = firebaseApp.firestore();
// // const auth = firebase.auth();

// // // export { auth, db };s
// // // export default firebaseApp;


// // export default firebase.auth();
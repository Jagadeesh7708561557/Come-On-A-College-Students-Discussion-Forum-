import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYVMisgMuPFHEBkI-ZHqQyQVy-nkzCI9Y",
  authDomain: "kms-comeon.firebaseapp.com",
  projectId: "kms-comeon",
  storageBucket: "kms-comeon.appspot.com",
  messagingSenderId: "647412039802",
  appId: "1:647412039802:web:e390baac4eff1e68303bc3",
  measurementId: "G-C8HLYWKS23"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
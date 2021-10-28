import firebase from "firebase";
import "firebase/firestore"
// step 1
import "firebase/auth"
import "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyBLtgrJpQjFm-QcTQYBFQvXb7lT6mGUA_k",
  authDomain: "reels-92baf.firebaseapp.com",
  projectId: "reels-92baf",
  storageBucket: "reels-92baf.appspot.com",
  messagingSenderId: "486640919382",
  appId: "1:486640919382:web:8985e47cea117dba312cf7"
  };
 
  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

// step 2
export const auth = firebase.auth()
export const storage = firebase.storage();
//Step 3=> firebase console; enable google login in auth panel

//Step 4
let googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = ()=> auth.signInWithPopup(googleAuthProvider);
export default firebase
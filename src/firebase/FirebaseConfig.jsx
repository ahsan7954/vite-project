// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Gw8-CqEM07BU48MuShCdGN76_1UTTh0",
  authDomain: "myblog-beaf6.firebaseapp.com",
  projectId: "myblog-beaf6",
  storageBucket: "myblog-beaf6.appspot.com",
  messagingSenderId: "522667914860",
  appId: "1:522667914860:web:17105200a6085fb0754a49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth  = getAuth(app);
const storage = getStorage(app); 

export {fireDb, auth, storage }
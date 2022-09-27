import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCxKBEUfqJeiWjcm0RT2098OW2rjBA-ek0",
  authDomain: "hotel-app-85b76.firebaseapp.com",
  projectId: "hotel-app-85b76",
  storageBucket: "hotel-app-85b76.appspot.com",
  messagingSenderId: "427987272149",
  appId: "1:427987272149:web:cd80109edb258622abfd5c",
  measurementId: "G-VGZS9EPXSD"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)
export {auth, db};
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpUz4rZ5XEVA-TCC_56Tibbq5hbsUwhfA",
  authDomain: "hotel-app-8a34d.firebaseapp.com",
  projectId: "hotel-app-8a34d",
  storageBucket: "hotel-app-8a34d.appspot.com",
  messagingSenderId: "847029942101",
  appId: "1:847029942101:web:ab211ed9f6d2696896a1dc"

  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)
export {auth, db};
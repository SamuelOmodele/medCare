import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDZd8XUv-ZtxzdrrTaartLJGJ9EANlSxNY",
  authDomain: "his-website-5c144.firebaseapp.com",
  projectId: "his-website-5c144",
  storageBucket: "his-website-5c144.appspot.com",
  messagingSenderId: "540984426365",
  appId: "1:540984426365:web:513d43dd36176e77f59614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)
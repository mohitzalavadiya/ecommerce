// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQudHB87ZSVRk6U8wNfSxHV3Nqgemrtjs",
  authDomain: "ecommmerce-2298b.firebaseapp.com",
  projectId: "ecommmerce-2298b",
  storageBucket: "ecommmerce-2298b.appspot.com",
  messagingSenderId: "1021327940230",
  appId: "1:1021327940230:web:ba8f891218129e291a0f07",
  measurementId: "G-E2D2QNKZ0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);
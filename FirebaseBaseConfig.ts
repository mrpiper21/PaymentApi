import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeMZd0yyjbL8oUr8U25dFepUzcyN5HUMI",
  authDomain: "paymentapi-a8baa.firebaseapp.com",
  projectId: "paymentapi-a8baa",
  storageBucket: "paymentapi-a8baa.appspot.com",
  messagingSenderId: "837042330270",
  appId: "1:837042330270:web:1bba52cfcedd900885f98f",
  measurementId: "G-8RRRE0VV3N"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FirebaseApp);
export const FireBaseDB = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
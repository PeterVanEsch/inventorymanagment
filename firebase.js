// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkn7dVvqMssODzfJjH9EVp-J-6lOVddYA",
  authDomain: "inventorymanagment-94484.firebaseapp.com",
  projectId: "inventorymanagment-94484",
  storageBucket: "inventorymanagment-94484.appspot.com",
  messagingSenderId: "1021236472140",
  appId: "1:1021236472140:web:12401d54e8b5d77af187e9",
  measurementId: "G-4CQRH4CNXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app)
export {firestore}
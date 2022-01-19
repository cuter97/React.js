// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp8tO4H6NcNS36wrhUirDRlVXkDLB4IrM",
  authDomain: "react-proyect-43651.firebaseapp.com",
  projectId: "react-proyect-43651",
  storageBucket: "react-proyect-43651.appspot.com",
  messagingSenderId: "332646858906",
  appId: "1:332646858906:web:2f2af2f4ef99bb622a9f23",
  measurementId: "G-8VDK0R1BVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app)

export default db
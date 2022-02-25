// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQADSDyZwibmRwK09KfMzAldg1a9TtLh8",
  authDomain: "my-shop-a12f1.firebaseapp.com",
  projectId: "my-shop-a12f1",
  storageBucket: "my-shop-a12f1.appspot.com",
  messagingSenderId: "261270281765",
  appId: "1:261270281765:web:a91ad7d28291d1a900a9cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6FjvZSx0U0Fg0QhdXIBX3J43YapX4AFc",
  authDomain: "twitter-clone-3717a.firebaseapp.com",
  projectId: "twitter-clone-3717a",
  storageBucket: "twitter-clone-3717a.appspot.com",
  messagingSenderId: "807740607837",
  appId: "1:807740607837:web:a88269144a2dc9f4c2ecb4",
  measurementId: "G-M2X6B61ECB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export default database;

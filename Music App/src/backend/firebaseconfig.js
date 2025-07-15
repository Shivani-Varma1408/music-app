// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
   
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsVH3XgXzKyL8R_svEgwLrYgFyeYpzcj4",
  authDomain: "music-app-f1690.firebaseapp.com",
  projectId: "music-app-f1690",
  storageBucket: "music-app-f1690.firebasestorage.app",
  messagingSenderId: "981698165374",
  appId: "1:981698165374:web:75e20addbd4eb8c060b62f"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let __AUTH = getAuth(firebaseApp);
export let __DB =getFirestore(firebaseApp);

export default firebaseApp

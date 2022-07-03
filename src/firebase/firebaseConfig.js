import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
  
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
  
    appId: process.env.REACT_APP_FIREBASE_APPID
  
  };
  
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
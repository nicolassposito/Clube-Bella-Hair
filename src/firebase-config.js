import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB96c-Caf7ishRUCF4aRKdsavWGr1dqgVc",
    authDomain: "clube-bella.firebaseapp.com",
    projectId: "clube-bella",
    storageBucket: "clube-bella.appspot.com",
    messagingSenderId: "292800677320",
    appId: "1:292800677320:web:c42d2ef9080d5ac81aacfd",
    measurementId: "G-E9XWV8W7W8"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  firebase.initializeApp(firebaseConfig);

  export const auth = getAuth(app);
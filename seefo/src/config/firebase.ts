// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB80rJ34I-vTkyPR2R8tT0uSvHISpm3Pkc",
  authDomain: "seefo-cbb8d.firebaseapp.com",
  projectId: "seefo-cbb8d",
  storageBucket: "seefo-cbb8d.appspot.com",
  messagingSenderId: "681266732835",
  appId: "1:681266732835:web:abca61d5b26b4d92a43696",
  measurementId: "G-XNHXE5J5KD",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import {
  getAnalytics
} from "firebase/analytics";
import {
  getAuth,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4mnk2kua4MhnMwz37_0oaL2v59ZeHh5U",
  authDomain: "netflix-gpt-c25fb.firebaseapp.com",
  projectId: "netflix-gpt-c25fb",
  storageBucket: "netflix-gpt-c25fb.appspot.com",
  messagingSenderId: "642108987021",
  appId: "1:642108987021:web:92dcce4522b38eee5434c4",
  measurementId: "G-W3ZEWGE9YK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();
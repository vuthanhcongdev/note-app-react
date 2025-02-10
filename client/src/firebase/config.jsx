// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVaKNTfZwyccQu7Q9T1RnGMV9CnqY3cVc",
  authDomain: "note-app-react-6f8fd.firebaseapp.com",
  projectId: "note-app-react-6f8fd",
  storageBucket: "note-app-react-6f8fd.firebasestorage.app",
  messagingSenderId: "572242064047",
  appId: "1:572242064047:web:ad79726b90d02e27891a5a",
  measurementId: "G-G89HXQ01YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
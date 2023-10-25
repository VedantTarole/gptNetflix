// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAyJYYfdpQoCEo3hmvpkER_p3dOf0yEu8",
  authDomain: "netflixgpt-3eef5.firebaseapp.com",
  projectId: "netflixgpt-3eef5",
  storageBucket: "netflixgpt-3eef5.appspot.com",
  messagingSenderId: "356172460268",
  appId: "1:356172460268:web:00024fb865eab9c80135c9",
  measurementId: "G-72GPLG7WGQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

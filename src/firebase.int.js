// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCfx7g2OZpI83LPmeybzsEF29M0w-0rVM",
    authDomain: "online-store-5e564.firebaseapp.com",
    projectId: "online-store-5e564",
    storageBucket: "online-store-5e564.appspot.com",
    messagingSenderId: "1081121141850",
    appId: "1:1081121141850:web:6ee74a8ba8a3e2301b5463",
    measurementId: "G-757BSK9DJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
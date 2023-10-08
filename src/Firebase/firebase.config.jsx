// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd7395sZsJ8KcC8AlI-eFqLR-xrdu8Mxc",
  authDomain: "assignment-9-beeb7.firebaseapp.com",
  projectId: "assignment-9-beeb7",
  storageBucket: "assignment-9-beeb7.appspot.com",
  messagingSenderId: "687881191493",
  appId: "1:687881191493:web:6ba7b4623ea11af8ca632c",
  measurementId: "G-DPSPGMRKXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue, remove } from "firebase/database"; // Import necessary functions

const firebaseConfig = {
  apiKey: "AIzaSyCUPU5jgSka89Io_y9FhKc-0RlhfSujFXU",
  authDomain: "studyapp-c37eb.firebaseapp.com",
  projectId: "studyapp-c37eb",
  storageBucket: "studyapp-c37eb.firebasestorage.app",
  messagingSenderId: "22291109354",
  appId: "1:22291109354:web:9a89ddb19bc7e61fed0e93",
  measurementId: "G-EGD6MEJ3ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Realtime Database initialization

export { database };

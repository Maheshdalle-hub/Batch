// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUPU5jgSka89Io_y9FhKc-0RlhfSujFXU",
  authDomain: "studyapp-c37eb.firebaseapp.com",
  projectId: "studyapp-c37eb",
  storageBucket: "studyapp-c37eb.appspot.com",
  messagingSenderId: "22291109354",
  appId: "1:22291109354:web:9a89ddb19bc7e61fed0e93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHqu4Fsun9WoRu8O7U1q_mvssxvzk5kJw",
  authDomain: "emplacement-ac56e.firebaseapp.com",
  projectId: "emplacement-ac56e",
  storageBucket: "emplacement-ac56e.appspot.com",
  messagingSenderId: "401460224378",
  appId: "1:401460224378:web:5a3186c977cfa68535b6c3",
  measurementId: "G-0WN5RK2CYJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
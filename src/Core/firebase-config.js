import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUPC73wXtSKGLnojytaYnC9TTPId2toAc",
  authDomain: "course-search-system.firebaseapp.com",
  projectId: "course-search-system",
  storageBucket: "course-search-system.appspot.com",
  messagingSenderId: "100172295442",
  appId: "1:100172295442:web:ed6c9c1fd593ba3f1417cb",
  measurementId: "G-B4HFSBSTRV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

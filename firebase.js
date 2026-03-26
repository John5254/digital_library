// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

// Your Firebase config (FIXED - all in one line, no breaks)
const firebaseConfig = {
  apiKey: "AIzaSyDEIcZD-zerk2WBNlDKgcved5MUFVZXG_o",
  authDomain: "digital-library-cb7e4.firebaseapp.com",
  databaseURL: "https://digital-library-cb7e4-default-rtdb.firebaseio.com",
  projectId: "digital-library-cb7e4",
  storageBucket: "digital-library-cb7e4.firebasestorage.app",
  messagingSenderId: "82984243047",
  appId: "1:82984243047:web:b4151510c78ab3945a29c2",
  measurementId: "G-V38WTV2T7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// Export so other files can use them
export { db, storage, auth };
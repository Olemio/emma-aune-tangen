import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA5yZfnbGSyBQw9gYL1ziyJNMvtNZQS_eM",
    authDomain: "emma-aune-tangen.firebaseapp.com",
    projectId: "emma-aune-tangen",
    storageBucket: "emma-aune-tangen.firebasestorage.app",
    messagingSenderId: "872375024498",
    appId: "1:872375024498:web:807ba9a31271a45aedbbeb",
    measurementId: "G-LR5CTRS6JE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

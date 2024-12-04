// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQbxuMA0_gehXc5rwO90TrePI4ENZ0Rag',
  authDomain: 'cinerama-f267d.firebaseapp.com',
  projectId: 'cinerama-f267d',
  storageBucket: 'cinerama-f267d.firebasestorage.app',
  messagingSenderId: '171794215270',
  appId: '1:171794215270:web:adefadfacc8778355098a7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

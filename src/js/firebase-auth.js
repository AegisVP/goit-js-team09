// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCfIzXCxs71xseB7ZnKVmLudSIiOAE8rNk',
  authDomain: 'goit-js-team9.firebaseapp.com',
  projectId: 'goit-js-team9',
  storageBucket: 'goit-js-team9.appspot.com',
  messagingSenderId: '361397749688',
  appId: '1:361397749688:web:680eec71a3e83157e1314d',
  measurementId: 'G-GSS228DZ29',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

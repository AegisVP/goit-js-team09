import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCfIzXCxs71xseB7ZnKVmLudSIiOAE8rNk',
  authDomain: 'goit-js-team9.firebaseapp.com',
  projectId: 'goit-js-team9',
  storageBucket: 'goit-js-team9.appspot.com',
  messagingSenderId: '361397749688',
  appId: '1:361397749688:web:680eec71a3e83157e1314d',
  measurementId: 'G-GSS228DZ29',
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, signOut };

import { app } from './firebase__init.js';
import { firebaseui } from 'firebaseui';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// Sign in existing users
// Create a form that allows existing users to sign in using their email address and password. When a user completes the form, call the signInWithEmailAndPassword method:

const auth = getAuth(app);
var ui = new firebaseui.auth.AuthUI(auth);

signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

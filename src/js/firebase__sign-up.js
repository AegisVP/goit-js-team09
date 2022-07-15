import { app } from './firebase__init.js';
import { firebaseui } from 'firebaseui';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// Sign up new users
// Create a form that allows new users to register with your app using their email address and a password. When a user completes the form, validate the email address and password provided by the user, then pass them to the createUserWithEmailAndPassword method:

const auth = getAuth(app);
var ui = new firebaseui.auth.AuthUI(auth);

createUserWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

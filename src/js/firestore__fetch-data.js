import { app } from './firebase__init.js';
import { collection, getDocs } from 'firebase/firestore';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, 'queue'));
querySnapshot.forEach(doc => {
  console.log(`${doc.id} => ${doc.data()}`);
});
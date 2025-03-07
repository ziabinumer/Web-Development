

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCn-VlOcXESfNJd81qY0Tlu9GN-520MeZc",
  authDomain: "gqii-42c43.firebaseapp.com",
  projectId: "gqii-42c43",
  storageBucket: "gqii-42c43.firebasestorage.app",
  messagingSenderId: "499713980243",
  appId: "1:499713980243:web:6ec3c798383e1b28f653a6",
  measurementId: "G-22V3VTZV31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

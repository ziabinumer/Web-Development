import { createContext, useContext, useEffect, useState } from 'react';
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

const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
  const [app, setApp] = useState(null);
  const [db, setDb] = useState(null);

  useEffect(() => {
    const firebaseApp = initializeApp(firebaseConfig);
    const firestoreDb = getFirestore(firebaseApp);
    setApp(firebaseApp);
    setDb(firestoreDb);
  }, []);

  return (
    <FirebaseContext.Provider value={{ app, db }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);

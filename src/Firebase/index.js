import firebase  from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBf76hWggiXM_0S4T1GE0K1Dc7hykDdQWY",
    authDomain: "e-commerceventasaguero.firebaseapp.com",
    projectId: "e-commerceventasaguero",
    storageBucket: "e-commerceventasaguero.appspot.com",
    messagingSenderId: "457718061875",
    appId: "1:457718061875:web:72819c00ff797455c43c46",
    measurementId: "G-7L1GP1X0K9"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirebase(){
      return app;
  }

  export function getFirestore(){
      return firebase.firestore(app);
  }
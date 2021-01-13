import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUvFlCbjN1PE3jIlJW9tDJ_2Z4kbZA1ZU",
  authDomain: "prueba-react-2f7da.firebaseapp.com",
  projectId: "prueba-react-2f7da",
  storageBucket: "prueba-react-2f7da.appspot.com",
  messagingSenderId: "159176735826",
  appId: "1:159176735826:web:4775f82dc27efbf11f338b",
  measurementId: "G-78VP39MYDW",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };

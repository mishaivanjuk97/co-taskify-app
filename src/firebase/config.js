import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDSmeTnv7JzyffGcwHqhL1TDV2Ul-PsumI",
  authDomain: "cotaskify.firebaseapp.com",
  projectId: "cotaskify",
  storageBucket: "cotaskify.appspot.com",
  messagingSenderId: "35721667450",
  appId: "1:35721667450:web:9e98f53ead68b638296cc3"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };

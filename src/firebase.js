import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANFtiwBqOkli9eNppIeVYfm_W7rLisQlA",
  authDomain: "practice-3e998.firebaseapp.com",
  projectId: "practice-3e998",
  storageBucket: "practice-3e998.appspot.com",
  messagingSenderId: "1018344555883",
  appId: "1:1018344555883:web:e52a4ad7bbe4b6baa4f82e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
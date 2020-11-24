import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyAykJn3KwY8S00bEqHSOCIYUE0JRnD5kmc",
  authDomain: "fir-test-400dc.firebaseapp.com",
  databaseURL: "https://fir-test-400dc.firebaseio.com",
  projectId: "fir-test-400dc",
  storageBucket: "fir-test-400dc.appspot.com",
  messagingSenderId: "899641804209",
  appId: "1:899641804209:web:1ee4aaece932abc05fe990"
})

export const auth = firebase.auth();
export default app
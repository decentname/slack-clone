import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBlAUTiJ4ar5sx-EYr6T0ajO-k8oIJQow",
  authDomain: "slack-clone-d1292.firebaseapp.com",
  databaseURL: "https://slack-clone-d1292.firebaseio.com",
  projectId: "slack-clone-d1292",
  storageBucket: "slack-clone-d1292.appspot.com",
  messagingSenderId: "778756698125",
  appId: "1:778756698125:web:bc3c6eb372edda2918e544",
  measurementId: "G-FRFRSPPN6P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

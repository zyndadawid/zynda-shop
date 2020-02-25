import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBtEKODD_9tF1z2MHtCLykOpyTLmtJQCOs",
  authDomain: "zynda-shop-db.firebaseapp.com",
  databaseURL: "https://zynda-shop-db.firebaseio.com",
  projectId: "zynda-shop-db",
  storageBucket: "zynda-shop-db.appspot.com",
  messagingSenderId: "704244271303",
  appId: "1:704244271303:web:1e4be48db3a69cd85456e2",
  measurementId: "G-SMHDKWLJVH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt: `select_account` });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

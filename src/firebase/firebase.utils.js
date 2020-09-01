import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDIlehqM5367_zSvzfD8KeIxpG1hRWiwjk",
    authDomain: "clothing-store-ce063.firebaseapp.com",
    databaseURL: "https://clothing-store-ce063.firebaseio.com",
    projectId: "clothing-store-ce063",
    storageBucket: "clothing-store-ce063.appspot.com",
    messagingSenderId: "142005404175",
    appId: "1:142005404175:web:c3b6f0c88539f6f1c6d97a",
    measurementId: "G-DTDQWJ4FLG"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
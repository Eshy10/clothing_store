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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  export const addCollectionsAndDocuments = async (collectionKeys, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKeys)

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    })
    return await batch.commit()
  }

  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };
  

  firebase.initializeApp(config);
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
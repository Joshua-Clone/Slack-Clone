// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyCCjhlx5CuxfZ4ZjIRpUG8oYni9N7VYRNQ",
    authDomain: "slack-clone-689ef.firebaseapp.com",
    projectId: "slack-clone-689ef",
    storageBucket: "slack-clone-689ef.appspot.com",
    messagingSenderId: "1028935916312",
    appId: "1:1028935916312:web:15c7ce382f91ea9aa6dc6d",
    measurementId: "G-6GY50T5Y4V"
  };

  // Taken from firebase Project Settings under Firebase SDK Config

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth(); 
  const provider = new firebase.auth.GoogleAuthProvider(); 
  // enable Google Auth on Firebase in the Authentication tab


  export { auth, provider, db }; 
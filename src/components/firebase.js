import firebase from 'firebase'
// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDp7lHceDIOmy2h9WfAWR0E1-eQ_rZRfIE",
    authDomain: "throwback-pasta-contact-form.firebaseapp.com",
    databaseURL: "https://throwback-pasta-contact-form.firebaseio.com",
    projectId: "throwback-pasta-contact-form",
    storageBucket: "throwback-pasta-contact-form.appspot.com",
    messagingSenderId: "239526744771",
    appId: "1:239526744771:web:0225c6f587980effee8876"
  })

  const db = firebaseApp.firestore();

  export {db}
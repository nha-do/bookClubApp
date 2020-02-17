//firebase config file

import firebase from 'firebase/app'
import 'firebase/firestore'
//import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA8DAkJouac1Oan6d3wqR4mITIu4G1w12A",
    authDomain: "bookclubsuggestions-df0d4.firebaseapp.com",
    databaseURL: "https://bookclubsuggestions-df0d4.firebaseio.com",
    projectId: "bookclubsuggestions-df0d4",
    storageBucket: "bookclubsuggestions-df0d4.appspot.com",
    messagingSenderId: "572122879315",
    appId: "1:572122879315:web:886c69f9a76fdad0037da6",
    measurementId: "G-3YRZLLPN98"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;

import firebase from 'firebase';
import 'firebase/app'; 
import 'firebase/auth'; 
require('firebase/auth'); 
require('firebase/app');
const firebaseConfig = {
    apiKey: "AIzaSyBSEr9al8zWMfFRJ3tXnacxDJAbt7P5Be4",
    authDomain: "story-telling-app-e1700.firebaseapp.com",
    databaseURL: "https://story-telling-app-e1700-default-rtdb.firebaseio.com",
    projectId: "story-telling-app-e1700",
    storageBucket: "story-telling-app-e1700.appspot.com",
    messagingSenderId: "797407099328",
    appId: "1:797407099328:web:eef46126f69b63a8513025"
  };
  if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
  export default firebase.database();
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC8tZVG9a_9QQCzqTW2A07Nkh6cvd-cukc",
    authDomain: "khoahocreactnativeluvina.firebaseapp.com",
    databaseURL: "https://khoahocreactnativeluvina.firebaseio.com",
    projectId: "khoahocreactnativeluvina",
    storageBucket: "khoahocreactnativeluvina.appspot.com",
    messagingSenderId: "sender-id",
    appId: "1:321050375199:android:487819c2da10f1b88e512a",
    measurementId: "G-measurement-id",
  }

firebase.initializeApp(firebaseConfig)
const authentication = firebase.auth()
const firebaseDatabase = firebase.database()
// authentication.createUserWithEmailAndPassword("hoang@gmail.com", "123456")
export {authentication, firebaseDatabase}



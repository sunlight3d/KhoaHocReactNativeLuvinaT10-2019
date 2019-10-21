import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDPSxXShX9ewn7Aqjl-8ubPpKGHGTnyeg0",
    authDomain: "reactnativetutorial-d247d.firebaseapp.com",
    databaseURL: "https://reactnativetutorial-d247d.firebaseio.com",
    projectId: "reactnativetutorial-d247d",
    storageBucket: "reactnativetutorial-d247d.appspot.com",
    messagingSenderId: "994950783513",
    appID: "1:994950783513:ios:fa77c8077283cc2f",
}

class FirebaseManager {
    constructor() {        
        firebase.initializeApp(firebaseConfig)
        this.database = firebase.database()
        this.authentication = firebase.auth()
    }
    createUserWithEmailAndPassword = (email, password) => {
        //login facebook, login gmail,... 
        return this.authentication.createUserWithEmailAndPassword(email, password)
    }
    signInWithEmailAndPassword = (email, password) => {
        return this.authentication.signInWithEmailAndPassword(email, password)
    }
}

var firebaseManager = new FirebaseManager()
export {
    firebaseManager
}

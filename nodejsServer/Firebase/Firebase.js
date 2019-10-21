const firebase = require("firebase/app")
require("firebase/auth")
require("firebase/database")


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
    insertSomething = (timestamp) => {
        this.database.ref('timestamps').set({
            timestamp
        })
    }
}

var firebaseManager = new FirebaseManager()
module.exports = {
    firebaseManager
}
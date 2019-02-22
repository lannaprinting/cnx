import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {

   var config = {
    apiKey: "AIzaSyCAvWQR3JY-bpJvMxvSx0at6o1AxJq-heY",
    authDomain: "lanna-printing.firebaseapp.com",
    databaseURL: "https://lanna-printing.firebaseio.com",
    projectId: "lanna-printing",
    storageBucket: "lanna-printing.appspot.com",
    messagingSenderId: "630673219912"
  }

    firebase.initializeApp(config)
    // firebase.firestore().settings({timestampsInSnapshots: true})
}

const fireDb = firebase.firestore()

export {fireDb}
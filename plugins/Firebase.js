import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {

    const config = {
        apiKey: 'AIzaSyDrelWMLh8n0amFb7JEJ2TDPU2hc-XDJXA',
        authDomain: 'wx-db-i.firebaseapp.com',
        databaseURL: 'https://wx-db-i.firebaseio.com',
        projectId: 'wx-db-i',
        storageBucket: 'wx-db-i.appspot.com',
        messagingSenderId: '288671693811'
    }

    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}

const fireDb = firebase.firestore()

// fireDb.settings({
//     timestampsInSnapshots: true
// })

export {fireDb}
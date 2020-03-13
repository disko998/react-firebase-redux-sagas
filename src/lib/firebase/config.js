import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyB2Q0GYGquaQE_9wv84p6Xobf2YHBqlOj8',
    authDomain: 'audito-4c3df.firebaseapp.com',
    databaseURL: 'https://audito-4c3df.firebaseio.com',
    projectId: 'audito-4c3df',
    storageBucket: 'audito-4c3df.appspot.com',
    messagingSenderId: '251724080262',
    appId: '1:251724080262:web:ca2dea8d51462fa9941d07',
}

firebase.initializeApp(firebaseConfig)

export default firebase

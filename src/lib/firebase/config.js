import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'mp3-jokes.firebaseapp.com',
    databaseURL: 'https://mp3-jokes.firebaseio.com',
    projectId: 'mp3-jokes',
    storageBucket: 'mp3-jokes.appspot.com',
    messagingSenderId: '1006836462251',
    appId: '1:1006836462251:web:9f7add22765b9c98a53dee',
}

firebase.initializeApp(firebaseConfig)

export default firebase

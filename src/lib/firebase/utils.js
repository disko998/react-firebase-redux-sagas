import firebase from './config'
import { randomId } from 'lib/utils'

export const auth = firebase.auth()
export const db = firebase.firestore()

export const checkUsersSession = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe()
            resolve(user)
        }, reject)
    })
}

export const getUserRef = async user => {
    const { uid, email, emailVerified } = user

    const userRef = db.collection('users').doc(uid)
    const userSnapshot = await userRef.get()

    if (userSnapshot.exists) {
        return userRef
    }

    await userRef.set({
        email,
        emailVerified,
        displayName: 'Anonymous',
        avatar: '',
        createdAt: new Date(),
    })

    return userRef
}

export const recordUserJoke = async user => {
    const collectionRef = db.collection('jokes')

    const docRef = await collectionRef.add({
        name: 'Test',
        author: user.id,
        likes: 0,
        audio: 'audio.mp3',
        createdAt: new Date(),
    })

    const jokes = await docRef.get()
    const jokeData = jokes.data()

    return {
        ...jokeData,
        id: docRef.id,
        author: { id: jokeData.author, name: user.displayName },
    }
}

export const listenForJokes = () => {
    return new Promise((resolve, reject) => {
        const unsubscirbeListener = db.collection('jokes').onSnapshot(
            snapshot => {
                console.log('querySnapshot', snapshot.docChanges())
                const data = snapshot.docChanges().map(item => {
                    const joke = item.doc.data()
                    console.log('joke', joke)
                    return joke
                    // const user = await getUserById(joke.author)

                    // if (!user) {
                    //     return { ...joke, author: { id: randomId(), name: 'unknown' } }
                    // }

                    // return {
                    //     ...joke,
                    //     author: { id: joke.author, name: user.displayName },
                    // }
                })

                resolve(Promise.all(data))
            },
            err => reject(err),
        )
    })
}

const getUserById = async id => {
    const userRef = db.doc(`users/${id}`)
    const userSnapshot = await userRef.get()

    if (userSnapshot.exists) {
        return userSnapshot.data()
    }

    return null
}

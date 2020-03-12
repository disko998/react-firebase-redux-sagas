import firebase from './config'

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

export const getAuthUserRef = async user => {
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

const getUserDataById = async id => {
    const userRef = db.doc(`users/${id}`)
    const userSnapshot = await userRef.get()

    if (userSnapshot.exists) {
        return userSnapshot.data()
    }

    return null
}

import firebase from './config'

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storageRef = firebase.storage().ref()

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

export const saveAudioToStorage = async (metadata, userId) => {
    try {
        const audioRef = storageRef.child(`jokes/${userId}/${metadata.name}.mp3`)
        const snapshot = await audioRef.put(metadata.audio)

        return snapshot.ref.getDownloadURL()
    } catch (error) {
        console.log(error)
    }
}

export const recordUserJoke = async (user, audioURL, metadata) => {
    const collectionRef = db.collection('jokes')

    const docRef = await collectionRef.add({
        name: metadata.name,
        author: user.id,
        likes: [],
        audio: audioURL,
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

export const updateJokeLikes = async (jokeId, userId) => {
    // TODO: Need to be transaction
    const jokeRef = db.doc(`jokes/${jokeId}`)
    const jokeSnapshot = await jokeRef.get()

    if (!jokeSnapshot.exists) {
        throw new Error('Document does not exists or is deleted')
    }

    const joke = jokeSnapshot.data()

    const index = joke.likes.indexOf(userId)

    if (index === -1) {
        joke.likes = [...joke.likes, userId]
        await jokeRef.update({
            likes: joke.likes,
        })
    } else {
        joke.likes.splice(index, 1)
        await jokeRef.update({
            likes: joke.likes,
        })
    }

    return joke
}

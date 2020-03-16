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
    const { uid, email, emailVerified, displayName } = user

    const userRef = db.collection('users').doc(uid)
    const userSnapshot = await userRef.get()

    if (userSnapshot.exists) {
        return userRef
    }

    await userRef.set({
        email,
        emailVerified,
        displayName: displayName,
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

export const updateJokeLikesTransaction = async (jokeId, userId) => {
    const jokeRef = db.doc(`jokes/${jokeId}`)

    return await db.runTransaction(async transaction => {
        const jokeSnapshot = await transaction.get(jokeRef)
        if (!jokeSnapshot.exists) {
            throw new Error('Document does not exists or is deleted')
        }

        const joke = jokeSnapshot.data()
        const index = joke.likes.indexOf(userId)

        index === -1 ? joke.likes.push(userId) : joke.likes.splice(index, 1)

        return transaction.update(jokeRef, { likes: joke.likes })
    })
}

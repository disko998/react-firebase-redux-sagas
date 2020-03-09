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

export const getUserRef = async user => {
    const { uid, email, emailVerified, isAnonymous } = user

    const userRef = db.collection('users').doc(uid)
    const userSnapshot = await userRef.get()

    if (userSnapshot.exists) {
        return userRef
    }

    await userRef.set({
        email,
        emailVerified,
        isAnonymous,
        displayName: 'Anonymous',
        avatar: '',
        createdAt: new Date(),
        jokes: [],
    })

    return userRef
}

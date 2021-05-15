import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDv7KJBiMLwk0BEb-8qnu2vP922dHzyE7E',
  authDomain: 'linkedin-clone-6de76.firebaseapp.com',
  projectId: 'linkedin-clone-6de76',
  storageBucket: 'linkedin-clone-6de76.appspot.com',
  messagingSenderId: '227985914442',
  appId: '1:227985914442:web:085eb6f6df4675ef0804b3',
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db

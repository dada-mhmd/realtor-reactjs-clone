// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1Z3qFI24mgP9zQAhJp1AwGVgiil7xjpU',
  authDomain: 'realtor-react-clone-fea72.firebaseapp.com',
  projectId: 'realtor-react-clone-fea72',
  storageBucket: 'realtor-react-clone-fea72.appspot.com',
  messagingSenderId: '22574058184',
  appId: '1:22574058184:web:89d141cc7315a2084d33fd',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()

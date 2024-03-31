import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged ,
    signOut,sendEmailVerification,GoogleAuthProvider,signInWithPopup} from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js'
    import { doc, setDoc,getFirestore,getDoc } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDTBGnID76cYZMpBbpg-MaSuMcqxZZTqNk",
    authDomain: "mini-hackathon-93643.firebaseapp.com",
    projectId: "mini-hackathon-93643",
    storageBucket: "mini-hackathon-93643.appspot.com",
    messagingSenderId: "1095318517215",
    appId: "1:1095318517215:web:cc4e3471bced8fcad7806a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export{
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendEmailVerification,
    GoogleAuthProvider,
    googleProvider,
    signInWithPopup,
    doc,
    setDoc,
    db,
    getDoc
}
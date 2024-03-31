import {auth,signInWithEmailAndPassword} from './firebase.js';
const login =() => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    console.log(email.value)

    
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            window.location="profile.html";
            console.log("user----->:")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error Message:"+errorMessage)
            // ..
        });

}

let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", login)

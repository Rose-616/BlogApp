import {auth,createUserWithEmailAndPassword,googleProvider,GoogleAuthProvider,signInWithPopup,doc,setDoc,db} from "./firebase.js"

const register =() => {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    console.log(email.value)

    
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("user----->:")
            if (location.pathname !== "/index.html"){
                window.location="index.html"
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error Message:"+errorMessage)
            // ..
        });

}

let addUserToFirestore =async (user)=>{
    const res = await setDoc(doc(db, "users", user.uid), {
        
        name: user.displayName,
        email: user.email,
        verified:user.emailVerified,
        photo:user.photoURL,
        
      });
      console.log("res",res)
      
}


let signInWithGoogle =()=>{
    
    signInWithPopup(auth, googleProvider)
  .then((result) => {
   
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    const user = result.user;
    console.log("user---->",user)
    addUserToFirestore(user)
    window.location = "profile.html"

       
    
   
   
   
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("errorMessage",errorMessage)
    // ...
  });

}

let registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", register)

let signinWithGoogle = document.getElementById("signinWithGoogle")
signinWithGoogle.addEventListener("click",signInWithGoogle)


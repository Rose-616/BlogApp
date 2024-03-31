import { auth, onAuthStateChanged, signOut, sendEmailVerification, db, doc, getDoc ,setDoc} from "./firebase.js"
let name = document.getElementById("name");
let email = document.getElementById("email")


onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    console.log("doc",docSnap.data())
    if(docSnap.data()){
      console.log("user-->", user)
      if (location.pathname !== "/profile.html") {
        window.location = "profile.html"
      }
    //   name.innerHTML = user.email.slice(0, user.email.indexOf("@"));
    // email.innerHTML = user.email
    

    }

    //   sendEmailVerification(auth.currentUser)
    // .then(() => {
    //   console.log("email sent ")
    // });
    
   
    


    // ...
  } else {
    console.log("user not logged in")
    if (location.pathname !== "/index.html") {
      window.location = "index.html"
    }
    // User is signed out
    // ...
  }
});
let logout = () => {
  signOut(auth).then(() => {
    console.log("signout successfully")
    window.location = "index.html"
    // Sign-out successful.
  }).catch((error) => {
    console.log("error -->", error)
    // An error happened.
  });
}

let publish =async (user)=>{
  const title = document.getElementById('title').value;
const content = document.getElementById('content').value;
const blogData = {
  title: title,
  content: content
};
await setDoc(doc(db, "blogs", "unique_id"), blogData);
console.log("Blog published successfully");
        
        // Clear the input fields after publishing
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
}

let logoutBtn = document.getElementById("logoutBtn");
logoutBtn && logoutBtn.addEventListener("click", logout)


let publishBtn = document.getElementById("publishBtn");
publishBtn && publishBtn.addEventListener("click", publish)

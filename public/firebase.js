import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAaoCTb0MpFa9zmcfsdbMbNfaxsobQZO9w",
    authDomain: "webdev-2d433.firebaseapp.com",
    databaseURL: "https://webdev-2d433-default-rtdb.firebaseio.com",
    projectId: "webdev-2d433",
    storageBucket: "webdev-2d433.appspot.com",
    messagingSenderId: "354502444257",
    appId: "1:354502444257:web:19bd6c4767dd7156f8a3a0",
    measurementId: "G-10M78B5HPP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


// Sign Up new user in firebase
const  username=document.getElementById("nameInp");
const  pass=document.getElementById("passInp");
const  usermail=document.getElementById("emailInp");
const  usernumber=document.getElementById("numberInp");
const submit=document.getElementById('submitBtn')

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

const auth = getAuth();

function registeruser(){
console.log("Registration Started");
createUserWithEmailAndPassword(auth, usermail.value, pass.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('Signed in') ;
    console.log('Signed In') ;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode) ;
    console.log(errorMessage) ;
    alert(errorMessage);
    // ..
  });
}
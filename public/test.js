
  // Import the functions you need from the SDKs you need
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
  import{getDatabase,ref,Set,child,get}
  from"https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
  const analytics = getAnalytics(app);
  const db=getDatabase();

  // ADDING REFERENCE  IN REGISTER PAGE 
  const  username=document.getElementById("nameInp");
  const  pass=document.getElementById("passInp");
  const  usermail=document.getElementById("emailInp");
  const  usernumber=document.getElementById("numberInp");
  const submit=document.getElementById('submitBtn')
  
  // FORM VALIDATION  ------
  function validation(){
     let nameregex= /^[a-zA-Z\s] + $/;
     let emailregex=/^[a-zA-z0-9]+@(gmail|yahoo|outlook)\.com$/;
   
    if (!nameregex.test(username.value)){
      alert("The name should only contain alphabets!");
      return false;
    }  
    if (!emailregex.test(usermail.value)){
      alert("The name should only contain alphabets!");
      return false;
    }  
    return true;
  } 

    // REGISTER USER TO FIREBASE  
  function RegisterUser(){
  console.log("registeruser")
     if (!validation()){
       return;
     }
    const dbREf=ref(db);
    get(Child(dbREf,"userList/"+username.value) )
    .then((snapshot)=>{
      if (snapshot.exists()){
         alert('Account already exist!');
      }
      else{
        Set(ref(db,"userList/"+username.value),
        {
          username:username.value,
          password:pass.value,
          mail=usermail.value,
          Number=usernumber.value
        })
    .then(()=>{
      alert("user added successfully");
    })
    .catch((error)=>{
      alert("error"+ error);
    })     
      }
    }
    ) ;
    }
       
    submit.addEventListener("click",RegisterUser);

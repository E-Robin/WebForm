var arrayMail = ["grobin@gmail.com","12@gmail.com","23@gmail.com","34@gmail.com"];
var arrayPass=["123","234","456", "789" ];


function myfunction(){
   console.log("hi bironin")
  var nam=document.forms['log']['userName'].value;
  var maill=document.forms["log"]["userMail"].value;
  var pass=document.forms["log"]["userPassword"].value;

  for(i=0 ;i<=4 ;i++){
     console.log("hi in for loop")
    if ((arrayMail[i]==maill) && (arrayPass[i]==pass)){
        window.location.href="dashboard.html"
        console.log("hi in if else")
        break;
    }
    else{
        alert("invalid values");
        break;
    }


  }
  }




function update(){
    console.log("hi rob")
    
document.getElementById("robi").innerHTML=document.getElementById("updates").value;
}




function update1(){
    console.log("hi rob")
    document.getElementById("num").innerHTML=document.getElementById("updateNumber").value;
}

function update3(){
    console.log("hi rob")
    document.getElementById("email").innerHTML=document.getElementById("updateEmail").value;
}






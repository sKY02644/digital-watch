var Body = document.querySelector(".container"),
     mainBody = document.querySelector(".clock-container"),
     Hours = document.querySelector("#hours"),
     Minutes = document.querySelector("#minutes"),
     Seconds = document.querySelector("#seconds");

function digitalWatch(){
    var hours,minutes,seconds;
    var time = new Date();
    
    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
    
    if(hours < 10){
        hours = "0"+hours;
    }
    else if(minutes < 10){
        minutes = "0"+minutes;
    }
    else if(seconds < 10){
        seconds = "0"+seconds;
    }
    
    Hours.innerHTML = hours+" :";
    Minutes.innerHTML = minutes+" :";
    Seconds.innerHTML = seconds;
   
   var ranOne = Math.round(Math.random()*255),
       ranTwo = Math.round(Math.random()*100),
       ranThree = Math.round(Math.random()*145);
   
   
   
   Body.style.backgroundImage = `linear-gradient(rgb(${ranOne},${ranTwo},${ranThree}),rgb(${ranOne},${ranThree},${ranTwo}`;      
   mainBody.style.border = `5px dotted rgb(${hours},${minutes},${seconds}`;      
       
    }
digitalWatch();


setInterval(digitalWatch,1000);

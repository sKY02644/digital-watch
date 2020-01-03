var Body = document.querySelector(".container");
var mainBody = document.querySelector(".clock-container");
var Hours = document.querySelector("#hours");
var Minutes = document.querySelector("#minutes");
var Seconds = document.querySelector("#seconds");

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
   
   var ranOne = Math.round(Math.random()*255);
   var ranTwo = Math.round(Math.random()*100);
   var ranThree = Math.round(Math.random()*145);
   
   
   
   Body.style.backgroundImage = `linear-gradient(rgb(${ranOne},${ranTwo},${ranThree}),rgb(${ranOne},${ranThree},${ranTwo}`;      
   mainBody.style.border = `5px dotted rgb(${hours},${minutes},${seconds}`;      
       
    }
digitalWatch();


setInterval(digitalWatch,1000);

var btn = document.getElementById("CG")
var bdisplay = document.getElementById("balance")

var firtmsg = document.getElementById("firstmsg")
var secondmsg = document.getElementById("secondmsg")

var thirdmsg = document.getElementById("thirdmsg")
var finalmsg = document.getElementById("finalmsg")

var balance = 1;

btn.addEventListener("click", function(){
    bdisplay.innerHTML = '$'+balance++;
        if (balance >= 101){
firtmsg.innerHTML = "Woah there buddy! You just casually created 100$! Might wanna take a break.."
        }
        

        if (balance >= 1001){
secondmsg.innerHTML = "Jeez, you've been here for quite a while now... wanna take a break anytime soon?"
        }
    })
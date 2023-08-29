var buttonNumber = document.querySelectorAll(".button").length;
var button = document.querySelectorAll(".button");

var aA = document.querySelector(".button1").classList;
var aB = document.querySelector(".button2").classList;
var aC = document.querySelector(".button3").classList;
var bA = document.querySelector(".button4").classList;
var bB = document.querySelector(".button5").classList;
var bC = document.querySelector(".button6").classList;
var cA = document.querySelector(".button7").classList;
var cB = document.querySelector(".button8").classList;
var cC = document.querySelector(".button9").classList;
var x = "x-background";
var o = "o-background";


var players = document.querySelectorAll(".players div");


players[0].setAttribute("id", "1");
players[1].classList.add("hidden");
players[2].classList.add("hidden");

for (i=0; i<buttonNumber; i++){
    button[i].addEventListener("click", function(){
        if(players[0].hasAttribute("id")){
            if(this.classList.contains("o-background")){
                alert("Check another box!");
            }
            else{
                this.classList.add("x-background");
                players[0].toggleAttribute("id");
                players[0].classList.toggle("hidden");
                players[1].classList.toggle("hidden");
                if(
                (aA[2]===x&&aB[2]===x&&aC[2]===x)||
                (bA[2]===x&&bB[2]===x&&bC[2]===x)||
                (cA[2]===x&&cB[2]===x&&cC[2]===x)||
                (aA[2]===x&&bA[2]===x&&cA[2]===x)||
                (aB[2]===x&&bB[2]===x&&cB[2]===x)||
                (aC[2]===x&&bC[2]===x&&cC[2]===x)||
                (aA[2]===x&&bB[2]===x&&cC[2]===x)||
                (aC[2]===x&&bB[2]===x&&cA[2]===x)){
                    players[1].classList.toggle("hidden");
                    players[2].classList.toggle("hidden");
                    players[2].innerHTML = "Player 1 win!🏅"
                    
                }
            }
            
        } else{
            if(this.classList.contains("x-background")){
                alert("Check another box!");
            }
            else{
                this.classList.add("o-background");
                players[0].toggleAttribute("id");
                players[0].classList.toggle("hidden");
                players[1].classList.toggle("hidden");
                if(
                    (aA[2]===o&&aB[2]===o&&aC[2]===o)||
                    (bA[2]===o&&bB[2]===o&&bC[2]===o)||
                    (cA[2]===o&&cB[2]===o&&cC[2]===o)||
                    (aA[2]===o&&bA[2]===o&&cA[2]===o)||
                    (aB[2]===o&&bB[2]===o&&cB[2]===o)||
                    (aC[2]===o&&bC[2]===o&&cC[2]===o)||
                    (aA[2]===o&&bB[2]===o&&cC[2]===o)||
                    (aC[2]===o&&bB[2]===o&&cA[2]===o)){
                        players[0].classList.toggle("hidden");
                        players[2].classList.toggle("hidden");
                        players[2].innerHTML = "Player 2 win!🏅"
                    }
            }
            
        }
    })
}





        

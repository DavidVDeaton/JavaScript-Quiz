// Highscore Variables
var high1 = document.getElementById("high1");
var high2 = document.getElementById("high2");
var high3 = document.getElementById("high3");
var high4 = document.getElementById("high4");
var high5 = document.getElementById("high5");

var attempts = localStorage.getItem("attempts");
var higharray = [];

for (i=0; i < attempts; i++) {
    
    highplayer = localStorage.getItem("player" + i);
    hghscore = localStorage.getItem("score" + i);

    if (highplayer != null) {

        higharray.push(hghscore + ": " + highplayer);
    };
    //console.log(higharray.sort());






  
    

};

console.log(higharray);
higharray.sort();
console.log(higharray);
higharray.reverse();
console.log(higharray);

high1.textContent = higharray[0];
high2.textContent = higharray[1];
high3.textContent = higharray[2];
high4.textContent = higharray[3];
high5.textContent = higharray[4];

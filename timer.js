var startQuiz = document.getElementById("start");
var display = document.getElementById("display");
var timer = 16;
var preTimer = 5.5;

startQuiz.addEventListener("click", function() {

    var removeBtn = document.getElementById("removeBtn");
    removeBtn.parentNode.removeChild(removeBtn);

    var footTimer = document.getElementById("footer");
    footTimer.textContent = "Timer: " + timer;

    setInterval(function() {
    preTimer--;

    if (preTimer >= 4) {
       display.textContent = "Start!";
    }

    else if (preTimer < 4 && timer > 0) {
        display.textContent = "";
        timer--;
        footTimer.textContent = "Timer: " + timer;
    }

    else {
        display.textContent = "Failure!"
    } 
        
    },1000);
});
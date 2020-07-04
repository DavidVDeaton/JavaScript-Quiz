var startQuiz = document.getElementById("start");
var display = document.getElementById("display");
var timer = 10;
var preTimer = 5.5;
var disappear = document.getElementsByClassName("disappear");

startQuiz.addEventListener("click", function() {

    var removeBtn = document.getElementById("removeBtn");
    removeBtn.parentNode.removeChild(removeBtn);

    var footTimer = document.getElementById("footer");
    footTimer.textContent = "Timer: " + timer;


    var preTimerInterval = setInterval(function() {
    preTimer--;

    if(preTimer >= 4) {
       display.textContent = "Start!";
    }

    else if (preTimer < 4) {
        display.textContent = "";
        timer--;
        footTimer.textContent = "Timer: " + timer;

        if (timer <= 0) {
            display.textContent = "Failure!"
        }
    }
      

       
    
    },1000);
   

   
  
});
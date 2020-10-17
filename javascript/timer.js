var startTimer = document.getElementById("start");
var display = document.getElementById("displayStart");
var rules = document.getElementById("rules");
var questions = document.getElementById("questions");
var inputName = document.getElementById("textInput");
var submitButton = document.getElementById("signIn");
var submitForm  = document.getElementById("playerSubmission");
var main = document.getElementById("main");
var timer = 0;
var qNum = 0;

if (localStorage.getItem("attempts") === null) {
    localStorage.setItem("attempts", 1);
};


// Question and Answer Variables
var qDis = document.getElementById("q");
var introA = document.getElementById("a");
var introB = document.getElementById("b");
var introC = document.getElementById("c");
var introD = document.getElementById("d");

// Audio Variables
var tick = new Audio (src = "audio/aaj_0589_ClockTick01.mp3");
var start = new Audio (src = "audio/sport_air_horn_reverb.mp3");
var welcome = new Audio (src = "audio/audeption_countdown_intro_ten_to_zero-the_show_starts_voice_solo_007.mp3");
var failure = new Audio (src = "audio/zapsplat_explosion_fire_burst_backdraft_004_44091.mp3");
var winner = new Audio (src = "audio/ftus_american_football_fans_applause_scream_cheer_usa_high_school_238.mp3");

startTimer.addEventListener("click", function() {

    var removeBtn = document.getElementById("removeBtn");
    removeBtn.setAttribute("class", "hidden");
    var footTimer = document.getElementById("footer");
    footTimer.textContent = "Time: " + timer;
    qNum = 0;
    welcome.play();
    rules.setAttribute("class", "visible");

    setTimeout(function() {
        welcome.pause();
        start.play();
        rules.setAttribute("class", "hidden");
        display.setAttribute("class", "visible");
        timer = 90;
    }, 10180);

    setTimeout(function() {
        setInterval(function() {
    
            display.setAttribute("class", "hidden");
            questions.setAttribute("class", "visible");
            timer--;
            tick.play();
            footTimer.textContent = "Time: " + timer;
            
            qDis.textContent = question[qNum].title;
            introA.textContent = question[qNum].choices[0];
            introB.textContent = question[qNum].choices[1];
            introC.textContent = question[qNum].choices[2];
            introD.textContent = question[qNum].choices[3];
            
            if (qNum === 10 && timer > 0) {
                
                introA.setAttribute("class", "hidden");
                introB.setAttribute("class", "hidden");
                introC.setAttribute("class", "hidden");
                introD.setAttribute("class", "hidden");
                display.textContent = "Winner!";
                display.setAttribute("class", "visible");
                qDis.textContent = "Score: " + timer;
                timer++;
                tick.pause();
                winner.play();
                submitForm.setAttribute("class", "visible");

            }
        
            else if (timer < 0) {
                
                footTimer.textContent = "Time: 0";
                display.textContent = "Failure!";
                display.setAttribute("class", "visible");
                tick.pause();
                failure.play();
                qDis.setAttribute("class", "hidden");
                introA.setAttribute("class", "hidden");
                introB.setAttribute("class", "hidden");
                introC.setAttribute("class", "hidden");
                introD.setAttribute("class", "hidden");
            } 
            
        }, 1000);
    
    }, 11550);
   
});

introA.addEventListener("click", function() {
    submitA();
});

introB.addEventListener("click", function() {
    submitB();
});

introC.addEventListener("click", function() {
    submitC();
});

introD.addEventListener("click", function() {
    submitD();
});

submitButton.addEventListener("click", function (){

    qNum++;
    var player = inputName.value.trim();
    var score = timer-1;
    var attempts = localStorage.getItem("attempts");

    if(player ==="") {
        alert("Error: Name cannot be blank");
    }
    else {
        alert("Success: View Highscores");

        localStorage.setItem("player" + attempts, player);
        localStorage.setItem("score" + attempts, score);
        display.textContent = "Start!";
        display.setAttribute("class", "hidden");
        qDis.textContent = "Refresh Page to Play Again.";

    }
    
    attempts++;
    localStorage.setItem("attempts", attempts);

});

// viewHighScores.addEventListener("click", function() {

//     main.setAttribute("class", "hidden");
//     $("scoresModal").modal("show");
//     console.log(attempts);

//     for (i=0; i < attempts; i++) {
        
//         highplayer = localStorage.getItem("player" + i);
//         hghscore = localStorage.getItem("score" + i);
//         playerHighScores.textContent = highplayer;
//         highscores.textContent = hghscore;

//     }



// });





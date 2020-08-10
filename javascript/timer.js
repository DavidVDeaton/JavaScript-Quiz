var startTimer = document.getElementById("start");
var display = document.getElementById("display");
var rules = document.getElementById("rules");
var inputName = document.getElementById("textInput");
var submitButton = document.getElementById("signIn");
var viewHighScores = document.getElementById("scores")
var preTimer = 16.5;
var attempts = 0
var correct = 0;
var incorrect = 0;
var qNum = 0;
var timer = 0;

startTimer.addEventListener("click", function() {

    var removeBtn = document.getElementById("removeBtn");
    removeBtn.parentNode.removeChild(removeBtn);
    var footTimer = document.getElementById("footer");
    footTimer.textContent = "Time: " + timer;

    var tick = new Audio (src = "audio/aaj_0589_ClockTick01.mp3");
    var failure = new Audio (src = "audio/zapsplat_explosion_fire_burst_backdraft_004_44091.mp3");
    var winner = new Audio (src = "audio/ftus_american_football_fans_applause_scream_cheer_usa_high_school_238.mp3");
    var start = new Audio (src = "audio/sport_air_horn_reverb.mp3");
    var welcome = new Audio (src = "audio/audeption_countdown_intro_ten_to_zero-the_show_starts_voice_solo_007.mp3");

    setInterval(function() {
    preTimer--;

    var qDis = document.getElementById("questionDis");
    var introA = document.getElementById("introA");
    var introB = document.getElementById("introB");
    var introC = document.getElementById("introC");
    var introD = document.getElementById("introD");
    var introE = document.getElementById("introE");
    
    if (preTimer >= 6) {
        welcome.play();
        display.textContent = "";
        rules.textContent = "Rules:";
        introA.textContent = "90 Seconds";
        introB.textContent = "10 Questions";
        introC.textContent = "+3 Seconds for every correct answer";
        introD.textContent = "-15 Seconds for every wrong answer";
        introE.textContent = "Score = Time left on the clock";    
    }

    else if (preTimer < 6 && preTimer >= 4) {
        display.textContent = "Start!";
        welcome.pause();
        rules.textContent = "";
        introA.textContent = "";
        introB.textContent = "";
        introC.textContent = "";
        introD.textContent = "";
        introE.textContent = "";
        timer = 90;
        start.play();
    }

    else if (preTimer < 4 && timer > 0 && qNum < 10) {
        display.textContent = "";
        timer--;
        tick.play();
        footTimer.textContent = "Time: " + timer;
        
        qDis.textContent = question[qNum].title;
        introA.textContent = question[qNum].choices[0];
        introB.textContent = question[qNum].choices[1];
        introC.textContent = question[qNum].choices[2];
        introD.textContent = question[qNum].choices[3];    
    }

    else if (preTimer < 4 && timer > 0 && qNum === 10) {
        footTimer.textContent = "Time: " + timer;
        display.textContent = "Winner!";
        qDis.textContent = question[10].title;
        introA.textContent = question[10].choices[0];
        introB.textContent = question[10].choices[1];
        introC.textContent = question[10].choices[1];
        introD.textContent = question[10].choices[1];
        rules.textContent = "Score: " + timer;
        
        tick.pause();
        winner.play();

        var highscore = document.getElementById("playerSubmission");
        highscore.setAttribute("class", "form-group");   
    }

    else {
        footTimer.textContent = "Time: 0";
        display.textContent = "Failure!";
        tick.pause();
        failure.play();
        qDis.textContent = question[10].title;
        introA.textContent = question[10].choices[0];
        introB.textContent = question[10].choices[1];
        introC.textContent = question[10].choices[1];
        introD.textContent = question[10].choices[1];   
    } 
        
    },1000);

    document.getElementById("introA").onclick = function () {submitA()};
    document.getElementById("introB").onclick = function () {submitB()};
    document.getElementById("introC").onclick = function () {submitC()};
    document.getElementById("introD").onclick = function () {submitD()};

    var correctAudio = new Audio(src = "audio/zapsplat_cartoon_xylophone_short_fast_ascend_002_53041.mp3");
    var incorrectAudio = new Audio(src ="audio/spa_clay_pots_clay_pot_small_break_03.mp3");

    function submitA () {
        if (question[qNum].choices[0] === question[qNum].answer) {
            correct++;
            correctAudio.play();
            timer = timer + 3;
        }
    
        else {
            incorrect++;
            incorrectAudio.play();
            timer = timer - 15;
        }
    
        qNum++;
    };
    
    function submitB () {
        if (question[qNum].choices[1] === question[qNum].answer) {
            correct++;
            correctAudio.play();
            timer = timer + 3;
        }
    
        else {
            incorrect++;
            incorrectAudio.play();
            timer = timer - 15;
        }
    
        qNum++;
    };
    
    function submitC () {
        if (question[qNum].choices[2] === question[qNum].answer) {
            correct++;
            correctAudio.play();
            timer = timer + 3;
        }
    
        else {
            incorrect++;
            incorrectAudio.play();
            timer = timer - 15;
        }
    
        qNum++;
    };
    
    function submitD () {
        if (question[qNum].choices[3] === question[qNum].answer) {
            correct++;
            correctAudio.play();
            timer = timer + 3;
        }
    
        else {
            incorrect++;
            incorrectAudio.play();
            timer = timer - 15;
        }
    
        qNum++;
    };

    submitButton.addEventListener("click", function (){
        
        var player = inputName.value.trim();
        var score = timer;
        var playerAndScore = player + ": " + score;

            if(player === "") {
                alert("Error: Name cannot be blank");
            }
            else {
                alert("Success: View Highscores");

                localStorage.setItem("player" + attempts, playerAndScore);
            }
        
        var removeSubmission = document.getElementById("playerSubmission");
        removeSubmission.parentNode.removeChild(removeSubmission);

    });
});

viewHighScores.addEventListener("click", function() {

$("scoresModal").modal("show");

var scoresDisplay = localStorage.getItem("player1");
$(".modal-content").text(scoresDisplay);



});





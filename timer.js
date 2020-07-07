var startTimer = document.getElementById("start");
var display = document.getElementById("display");
var preTimer = 17;
var correct = 0;
var incorrect = 0;
var qNum = 0;
var timer = 0;

startTimer.addEventListener("click", function() {

    var removeBtn = document.getElementById("removeBtn");
    removeBtn.parentNode.removeChild(removeBtn);
    var footTimer = document.getElementById("footer");
    footTimer.textContent = "Time: " + timer;

    var tick = new Audio (src = "aaj_0589_ClockTick01.mp3");
    var failure = new Audio (src = "zapsplat_explosion_fire_burst_backdraft_004_44091.mp3");
    var winner = new Audio (src = "ftus_american_football_fans_applause_scream_cheer_usa_high_school_238.mp3");
    var start = new Audio (src = "sport_air_horn_reverb.mp3");

    setInterval(function() {
    preTimer--;

    var qDis = document.getElementById("questionDis");
    var answerA = document.getElementById("a");
    var answerB = document.getElementById("b");
    var answerC = document.getElementById("c");
    var answerD = document.getElementById("d");
    var answerE = document.getElementById("e");
    
    if (preTimer >= 6) {
        display.textContent = "";
        qDis.textContent = "Rules:";
        answerA.textContent = "90 Seconds";
        answerB.textContent = "10 Questions";
        answerC.textContent = "+3 Seconds for every correct answer";
        answerD.textContent = "-15 Seconds for every wrong answer";
        answerE.textContent = "Score = Time left on the clock";    
    }

    else if (preTimer < 6 && preTimer >= 4) {
        display.textContent = "Start!";
        qDis.textContent = "";
        answerA.textContent = "";
        answerB.textContent = "";
        answerC.textContent = "";
        answerD.textContent = "";
        answerE.textContent = "";
        timer = 90;
        start.play();
    }

    else if (preTimer < 4 && timer > 0 && qNum < 10) {
        display.textContent = "";
        timer--;
        tick.play();
        footTimer.textContent = "Time: " + timer;
        
        qDis.textContent = question[qNum].title;
        answerA.textContent = question[qNum].choices[0];
        answerB.textContent = question[qNum].choices[1];
        answerC.textContent = question[qNum].choices[2];
        answerD.textContent = question[qNum].choices[3];    
    }

    else if (preTimer < 4 && timer > 0 && qNum === 10) {
        footTimer.textContent = "Time: " + timer;
        display.textContent = "Winner!";
        qDis.textContent = question[10].title;
        answerA.textContent = question[10].choices[0];
        answerB.textContent = question[10].choices[1];
        answerC.textContent = question[10].choices[1];
        answerD.textContent = question[10].choices[1];
        answerE.textContent = "Score: " + timer;
        
        tick.pause();
        winner.play();

        var highscore = document.getElementById("playerName");
        highscore.setAttribute("class", "form-group");
        
      
    }

    else {
        footTimer.textContent = "Time: 0";
        display.textContent = "Failure!";
        tick.pause();
        failure.play();
        qDis.textContent = question[10].title;
        answerA.textContent = question[10].choices[0];
        answerB.textContent = question[10].choices[1];
        answerC.textContent = question[10].choices[1];
        answerD.textContent = question[10].choices[1];   
    } 
        
    },1000);

    document.getElementById("a").onclick = function () {submitA()};
    document.getElementById("b").onclick = function () {submitB()};
    document.getElementById("c").onclick = function () {submitC()};
    document.getElementById("d").onclick = function () {submitD()};

    var correctAudio = new Audio(src = "zapsplat_cartoon_xylophone_short_fast_ascend_002_53041.mp3");
    var incorrectAudio = new Audio(src ="spa_clay_pots_clay_pot_small_break_03.mp3");

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

});



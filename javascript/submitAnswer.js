var correctAudio = new Audio(src = "audio/zapsplat_cartoon_xylophone_short_fast_ascend_002_53041.mp3");
var incorrectAudio = new Audio(src ="audio/spa_clay_pots_clay_pot_small_break_03.mp3");

function submitA () {
    if (question[qNum].choices[0] === question[qNum].answer) {
        correctAudio.play();
        timer = timer + 3;
    }

    else {
        incorrectAudio.play();
        timer = timer - 15;
    }

    qNum++;
};

function submitB () {
    if (question[qNum].choices[1] === question[qNum].answer) {
        correctAudio.play();
        timer = timer + 3;
    }

    else {
        incorrectAudio.play();
        timer = timer - 15;
    }

    qNum++;
};

function submitC () {
    if (question[qNum].choices[2] === question[qNum].answer) {
        correctAudio.play();
        timer = timer + 3;
    }

    else {
        incorrectAudio.play();
        timer = timer - 15;
    }

    qNum++;
};

function submitD () {
    if (question[qNum].choices[3] === question[qNum].answer) {
        correctAudio.play();
        timer = timer + 3;
    }

    else {
        incorrectAudio.play();
        timer = timer - 15;
    }

    qNum++;
};




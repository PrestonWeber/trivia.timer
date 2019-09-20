var timeLeft = 30;
var intervalId;

function run() {
    intervalId = setInterval(count, 1000);


};

function count() {
    timeLeft = timeLeft - 1;
    console.log(timeLeft);
    $("#time-left").html("<h2>" + timeLeft + "</h2>");
    if(timeLeft === 0) {
        timeUp();
        return false;
    }
}


function timeUp() {
    clearInterval(intervalId);
    timeLeft = 30;
    $(".container").empty()
}

// create a function that calculates the score and call upon it in the timeUp function


function score() {

}

run();


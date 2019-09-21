var timeLeft = 30;
var intervalId;
var totalCorrect = 0;
var femur = $("#femur");
var ninetySeven = $("#ninetySeven");
var possum = $("#possum");
var morpheus = $("#morpheus");
var submit = $("#submit");

function run() {
    intervalId = setInterval(count, 1000);


};

function count() {
    timeLeft = timeLeft - 1;
    $("#time-left").html("<h2>" + timeLeft + "</h2>");
    if (timeLeft === 0) {
        timeUp();
        
        //$("p").append("<p>Your final score is: " + totalCorrect + "/4</p>")
        return false;

    };

};


function timeUp() {
    clearInterval(intervalId);
    console.log(femur[0].checked ,femur);


    if (femur[0].checked == true) {
        totalCorrect++;
    }
    if (ninetySeven[0].checked == true) {
        totalCorrect++;
    }
    if (possum[0].checked == true) {
        totalCorrect++;
    }
    if (morpheus[0].checked == true) {
        totalCorrect++;
    }
    $(".container").empty();
    $(".container").append("<p>Your final score is: " + totalCorrect + "/4</p>")
    console.log(totalCorrect);



};

submit.on("click", timeUp)

// create a function that calculates the score and call upon it in the timeUp function




run();


//create three divs for different pages that we will show/hide as you go.

//define variables - questions, answers correct, answers incorrect, time remaining,
//using intervalId, set a timer that starts when you hit the Start button on first page.
//when timer = 0 then automatically goes to next page.

//in an array of objects with  questions and answers properites. 
// in a for loop create function
//           $("destination").text(arr[i].question)
//append the questions into html


//have correct answers as object in our questionsArr 

//if userChoice matches a value in the correct answers array( >= 0 ) then userScore++

//if answer = -1 then incorrect answers++ 
//if no answer selected, then display that number as Unanswered. 
//want to store questions 

// var timer = $("#questions-page").html("00:30");
// console.log(timer);
// //  TODO: Use setInterval to start the count here and set the clock to running.
// if (!clockRunning) {
//   intervalId = setInterval(count, 1000);
//   clockRunning = true;



$("#start-button").on("click", start);


function start() {
    userScore = 0;
    wrong = 0;

    
    $("#firstPage").hide();
    $("#final-page").hide();
    $("#questions-page").show();
       

    var count = 15;
    
    function startTimer() {
        setTimeout(countDown, 1000);
    }
    
    function timeUp() {
        $("#timer").text("Time left: " + 0);
        $("#time-left").append("<h2>Time's Up!</h2>");

        $(".rightA").text("Right Answers: " + userScore);
        $(".wrongA").text("Wrong Answers: " + wrong);
        $(".row").empty();
        createCards();
        $("#restart-button").on("click", start);
    
        
    }

    function countDown() {
        if (--count === 0) {
            $("#questions-page").hide();
            timeUp();
            $("#final-page").show();
            
        } else {
            $("#timer").text("Time left: " + count);
            startTimer();
        }
        console.log(count);
    }
    $("#timer").text("Time left: " + count);
    startTimer();
}






var questionsArr = [
    {
        Q: "Q: How many Americans experience some form of mental illness?",
        A: ["1 in 5", "1 in 8", "1 in 10"],
        CorrectAnswer: 0
    },

    {
        Q: "Q: About how many people commit suicide every year?",
        A: ["50000", "800000", "10000"],
        CorrectAnswer: 1
    },

    {
        Q: "Q: How many people say they have experienced mental health stigma?",
        A: ["1 in 10", "3 in 4", "2 in 7"],
        CorrectAnswer: 1
    },

    {
        Q: "Q: What is the leading cause of disability worldwide and is a major contributor to the global burden of disease?",
        A: [" Schizophrenia", "Anxiety", "Depression"],
        CorrectAnswer: 2
    }
];


function createCards() {

    questionsArr.forEach(function (question, questionsIndex) {

        var col = $('<div class="col-6">');
        var card = $('<div class="card">');
        var header = $('<div class="card-header">').text(question.Q);
        var name = question.CorrectAnswer;
    
        col.append(card);
        card.append(header);
    
    
        question.A.forEach(function (answers, answersIndex) {
            var span = $('<span>');
            var radioBtn = $('<input  class="radio" type="radio" name="' + questionsIndex + '" index="' + answersIndex + '"/>');
    
            span.append(radioBtn, answers);
    
            card.append(span);
    
        });
    
        // card.append(radioBtn);
        $(".row").append(col);
    });    
}

createCards();
var userScore = 0;
var wrong = 0;

$(".radio").on("click", function () {
    var questionsIndex = $(this).attr('name');
    var answersIndex = $(this).attr('index');

    console.log(questionsIndex, answersIndex);
    console.log(questionsArr[questionsIndex]);
    var rightAns = questionsArr[questionsIndex].CorrectAnswer;
    // does answersIndex = correct answer value




    if (answersIndex == rightAns) {
        userScore++;
    } else {
        wrong++;
    }
    console.log("wrong" + wrong);
    console.log("right" + userScore);

    // if (answersIndex = )

    // $(".rightA").text("Right Answers: " + userScore);
    // $(".wrongA").text("Wrong Answers: " + wrong);

});
// var correctAns = question.CorrectAnswer;




//in div class= "final-page"
// append the userScore on the page AFTER timer runs out or when user clicks finish.
//when (timer runs out || click finish button) {}
var rightA = $("#final-page").append("<div class='rightA'>");
var wrongA = $("#final-page").append("<div class='wrongA'>");

// $("#final-page").show();

// }














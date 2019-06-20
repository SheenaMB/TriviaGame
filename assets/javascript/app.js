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

// $("#start-button").on("click", start);

// setTimeout(timeUp, 1000 * 30);


// function start() {

//     var timer = $("#questions-page").html("00:30");
//     console.log(timer);
//     //  TODO: Use setInterval to start the count here and set the clock to running.
//     if (!clockRunning) {
//       intervalId = setInterval(count, 1000);
//       clockRunning = true;
//     }  
//   }


// function timeUp() {
//     $("#time-left").append("<h2>Time's Up!</h2>");
//     console.log("time is up");
// }

// function reset() {
//     time = 0;
//     lap = 1;
//     $("#laps").empty();
  
//     //  TODO: Change the "display" div to "00:00."
//     $("#display").html("00:30")
  
//   }  



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



questionsArr.forEach(function (question, questionsIndex) {
    
    var col = $('<div class="col-6">');
    var card = $('<div class="card">');
    var header = $('<div class="card-header">').text(question.Q);
    var name = questionsIndex;
    col.append(card);
    card.append(header);

    question.A.forEach(function (answers,answersIndex) {
        var span = $('<span>');
        var radioBtn = $('<input  class="radio" type="radio" name="' + questionsIndex + '" index="'+ answersIndex + '"/>');
        
        span.append(radioBtn,answers);
       
        card.append(span);

        console.log(answers);
    });

        

    // card.append(radioBtn);
    $(".row").append(col);
});

$(".radio").on("click", function(){
    var questionsIndex = $(this).attr('name');
    var answersIndex = $(this).attr('index');

    console.log(questionsIndex,answersIndex);
    // does answersIndex = correct answer value
    //if yes then ++userScore

});


//in div class= "final-page"

var userScore;












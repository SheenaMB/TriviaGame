//create three divs for different pages that we will show/hide as you go.

//define variables - questions, answers correct, answers incorrect, time remaining,
//using intervalId, set a timer that starts when you hit the Start button on first page.
//when timer = 0 then automatically goes to next page.

//in an array of objects with  questions and answers properites. 
// in a for loop create function
//           $("destination").text(arr[i].question)
//append the questions into html


//put correct answers in an answers array


//if userChoice matches a value in the correct answers array( >= 0 ) then userScore++
//if answer = -1 then incorrect answers++ 
//if no answer selected, then display that number as Unanswered. 
//want to store questions 

// index[i].A[];

var questionsArr = [
    {
        Q: "Q: How many Americans experience some form of mental illness?",
        A: ["1 in 5", "1 in 8", "1 in 10"],
        CorrectAnswer: "1 of 5"
    },

    {
        Q: "Q: About how many people commit suicide every year?",
        A: ["50000", "800000", "10000"],
        CorrectAnswer: "800000"
    },

    {
        Q: "Q: How many people say they have experienced mental health stigma?",
        A: ["1 in 10", "3 in 4", "2 in 7"],
        CorrectAnswer: "3 in 4"
    },

    {
        Q: "Q: What is the leading cause of disability worldwide and is a major contributor to the global burden of disease?",
        A: [" Schizophrenia", "Anxiety", "Depression"],
        CorrectAnswer: "Depression"
    }
];



questionsArr.forEach(function (question) {

    var col = $('<div class="col-6">');
    var card = $('<div class="card">');
    var header = $('<div class="card-header">').text(question.Q);

    col.append(card);
    card.append(header);

    question.A.forEach(function (answers) {
        var span = $('<span>');
        var radioBtn = $('<input type="radio" name="rbtnCount" />');
        span.append(radioBtn,answers);
       
        card.append(span);
        console.log(answers);
    });

    // card.append(radioBtn);
    $(".row").append(col);




    // answerOptions.append(answersSection);
    // answersSection.append(card);
    // radioBtn.appendTo(answerOptions);

    // var  <ul class="list-group list-group-flush">
    // console.log(question.Q);
    // console.log(question.A);
    // console.log(question.CorrectAnswer);


});

//need radio button. 
//in li
//li in  ul 
// ul in in card

    // var answersSection = $('<ul class="list-group list-group-flush">');
    // var answerOptions = $('<li class="list-group-item "></li>');
    // var radioBtn = $('<input type="radio" name="rbtnCount" />');

    // answerOptions.append(answersSection);
    // answersSection.append(card);
    // radioBtn.appendTo(answerOptions);


    // + question.A[i] + 
    // var header = $('<div class="card-header">').text(question.Q);












// for (let i=0; i< questionsArr.length; i++) {
//     console.log[i];
//     console.log(questionsArr[i].A);

//     let currentAnswers = questionsArr[i].A
//     for (let j=0; j < currentAnswers.length; j++){
//         console.log(currentAnswers[j]);
//     }
// }

// forEach ??

// read up on forEach
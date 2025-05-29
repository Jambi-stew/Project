function finishQuiz() {
    alert("Thanks for taking our quiz.")
}

function checkAnswers() {
    // assign 0 to the score var
    var score= 0;
// assign the quiz elements to the quiz variable
quiz = document.forms.Quiz.elements;
// assign the answer to the question to the answer1 var
answer1 = quiz.howmany.value
//check answer for first question
if (answer1 == "4"){
    //add one if correct
    score = score + 1;
}



    alert ("Well done, your score was..." + score);
}
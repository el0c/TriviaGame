// Create Game Object
const TriviaGame = function() {
    // Create Variables

    let timeAllowed = 10, timeWarning = 5; 
    let correctAnswers, currentQuestion, choices;
    let timeLeft;


    // Get questions about video games from The Open Trivia Database
    const api_url = `https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`

    // Start New Game
this.startNewGame = function() {
    dispalyPage(0);
}    

this.startQuiz = function () {
    choices = new Array(answers);
    correctAnswers = 0;
    currentQuestion = 0;

    // Reset quiz page
    $("#question, #answers, #timer").css({"display": none});
    resetTimer();
    dispalyPage(1);

    $.getJSON(api_url, JSON => {
        const 
    });
}

}
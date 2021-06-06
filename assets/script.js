  
// Questions and Answers Array
var questions = [
    {
        question: 'What would following code return? console.log(typeof typeof 1);',
        choiceA: '1. string',
        choiceB: '2. number',
        choiceC: '3. Syntax error',
        choiceD: '4. undefined',
        correct: 'A'
    },
    {
        question: 'Commonly used data types DO NOT include:',
        choiceA: '1. strings',
        choiceB: '2. booleans',
        choiceC: '3. alerts',
        choiceD: '4. numbers',
        correct: 'C'
    },
    {
        question: 'Which software company developed JavaScript?',
        choiceA: '1. Mozilla',
        choiceB: '2. Netscape',
        choiceC: '3. Sun Microsystems',
        choiceD: '4. Oracle',
        correct: 'B'
    },
    {
        question: 'The condition in an if/else statement is enclosed with _____.',
        choiceA: '1. quotes',
        choiceB: '2. curly brackets',
        choiceC: '3. parentheses',
        choiceD: '4. square brackets',
        correct: 'C'
    },
    {
        question: 'Arrays in JavaScript can be used to store ______',
        choiceA: '1. numbers and strings',
        choiceB: '2. other arrays',
        choiceC: '3. booleans',
        choiceD: '4. all of the above',
        correct: 'D'
    },
    {
        question: 'What will the code below output to the console? console.log(1 + +"2" + "2");',
        choiceA: '1. "32"',
        choiceB: '2. "122"',
        choiceC: '3. "13"',
        choiceD: '4. "14"',
        correct: 'A'
    },
    {
        question: 'String values must be enclosed with _____ when being assigned to variables.',
        choiceA: '1. commas',
        choiceB: '2. curly brackets',
        choiceC: '3. quotes',
        choiceD: '4. parentheses',
        correct: 'C'
    },
    {
        question: 'A very useful tool during development and debugging for printing content to the debugger is:',
        choiceA: '1. JavaScript',
        choiceB: '2. terminal/bash',
        choiceC: '3. for loops',
        choiceD: '4. console.log',
        correct: 'D'
    }
];
// Global Variables Start

 // Timer Countdown Function
 var timerEl = document.getElementById('countdown');
 var timeLeft = 60;

 //Key Variables
 var runningQuestion = 0;
 var score = 0;
 var scorePercent = 0;

 //Quiz and Questions
 var question = document.getElementById('question');
 var choiceA = document.getElementById('A');
 var choiceB = document.getElementById('B');
 var choiceC = document.getElementById('C');
 var choiceD = document.getElementById('D');
 var answerDisplay = document.getElementById('answer');

 // Start Timer and Quiz
 var intro = document.getElementById('intro');
 var quiz = document.getElementById('quiz');
 var startBtn = document.getElementById('start');

 //Scoring Pages Variables
 var inpName = document.getElementById('inpName');
 var scoreboard = document.getElementById('scoreboard');
 var initials = document.getElementById('initials');
 var scoreList = document.getElementById('highscore');
 var yourscore = document.getElementById('yourscore');
// Global Variables End

// Timer Start
function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 5) {
            timerEl.textContent = 'Time: ' + timeLeft + ' seconds';
            timeLeft--;
        }
        else if (timeLeft <= 5 && timeLeft > 1) {
            timerEl.textContent = 'Time: ' + timeLeft + ' seconds';
            timerEl.style.color = 'red';
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = 'Time: ' + timeLeft + ' second';
            timeLeft--;
        }
        else if (timeLeft === 0) {
            timerEl.textContent = 'Time up!';
            clearInterval(timeInterval);
            alert('Time is up! Let us see how you did.');
            scoreRender();
        }
    }, 1000);
};
// Timer End
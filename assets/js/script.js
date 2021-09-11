// questions array
const questionArray = [
    {
        question: 'What is 2 + 2?',
        // answers array
        answers: [
            {
                option: '1',
                isCorrect: false
            },
            {
                option: '2',
                isCorrect: false
            },
            {
                option: '3',
                isCorrect: false
            },
            {
                option: '4',
                isCorrect: true
            }
        ]
        // answers array end
    },
    {
        // questions array (2)
        question: 'Exam Deux',
        // answers array (2)
        answers: [
            {
                option: 'Un',
                isCorrect: false
            },
            {
                option: 'Deux',
                isCorrect: true
            },
            {
                option: 'Trois',
                isCorrect: false
            },
            {
                option: 'Quatre',
                isCorrect: false
            }
        ]
        // end answers array (2)
    },
    {
        question: 'test three',
        // answers array
        answers: [
            {
                option: 'answer one',
                isCorrect: true
            },
            {
                option: 'answer two',
                isCorrect: false
            },
            {
                option: 'answer three',
                isCorrect: false
            },
            {
                option: 'answer four',
                isCorrect: false
            }
        ]
        // answers array end
    },
    {
        // questions array (2)
        question: 'test four',
        // answers array (2)
        answers: [
            {
                option: 'answer one',
                isCorrect: false
            },
            {
                option: 'answer two',
                isCorrect: false
            },
            {
                option: 'answer three',
                isCorrect: false
            },
            {
                option: 'answer four',
                isCorrect: true
            }
        ]
        // end answers array (2)
    },
    {
        // questions array (2)
        question: 'test five',
        // answers array (2)
        answers: [
            {
                option: 'answer one',
                isCorrect: false
            },
            {
                option: 'answer two',
                isCorrect: true
            },
            {
                option: 'answer three',
                isCorrect: false
            },
            {
                option: 'answer four',
                isCorrect: false
            }
        ]
        // end answers array (2)
    }
];

const timeAmount = document.querySelector('#timeAmount');
const highScoresBtn = document.querySelector('#highScoresBtn');

let quizBox = document.querySelector('#questions');
let questionArea = document.querySelector('.question');
let answersBox = document.querySelector('#answers');

let answerBtns = document.querySelectorAll('.answer');
let answerTags = document.getElementsByTagName('button');
// console.log(answerTags[2]);

let currentItem = 1;

let currentQuestionItem = 0;
let currentAnswerItem = 0;

let currentQuestion = questionArray[currentItem].question;
console.log(currentQuestion);
let currentAnswerArray = questionArray[currentItem].answers;
console.log(currentAnswerArray);

// single answer item = option / isCorrect
let singleAnswerItem = questionArray[currentItem].answers[currentItem];
console.log(singleAnswerItem);


// Load functions on page load
window.addEventListener('DOMContentLoaded', function () {
    renderQuestions();
    renderAnswers();
});

// add event listener on btns and iterate on true clicks
answerBtns.forEach(function (btn) {
    
    btn.addEventListener('click', function () {
        console.log(btn);

    });
});

// capture questions from questionsArray for iteration
function renderQuestions() {
    // questionIterator relies on current item to change
    // console.log(currentQuestion);
    currentItem++
    quizBox.className = 'box';
    questionArea.className = 'question';
    questionArea.innerHTML = currentQuestion;
};

// capture answers from questionsArray for iteration
function renderAnswers() {
    // answerIterator relies on current item to change
    currentItem++

    answersBox.className = 'answers';
    answerTags[1].innerHTML = `${currentAnswerArray[0].option}`;
    answerTags[2].innerHTML = `${currentAnswerArray[1].option}`;
    answerTags[3].innerHTML = `${currentAnswerArray[2].option}`;
    answerTags[4].innerHTML = `${currentAnswerArray[3].option}`;
};

function findCorrectAnswer() {

};














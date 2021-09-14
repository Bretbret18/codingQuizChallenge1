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
let answerBtns = document.querySelectorAll('#btn');

let currentItem = 0;
let questionIndex = 0;
let answerIndex = 0;

let currentAnswerArray = questionArray[currentItem].answers;

function renderQuestions() {
    
    quizBox.className = 'box';
    questionArea.className = 'question';
    questionArea.innerHTML = questionArray[currentItem].question;
    answersBox.className = 'answers';
    function answerLoop(){
    for (let i = 0; i < questionArray.length - 1; i++) {
        console.log(answerBtns[i]);
        console.log(i);
        answerBtns[i].innerHTML = currentAnswerArray[i].option;
        answerBtns[i].value = currentAnswerArray[i].isCorrect;
        
    }
}
    answerBtns.forEach(function (btn) {

        btn.addEventListener('click', function (e) {
            console.log(btn);
            if (btn.value === 'true') {
                console.log('true');
                nextQuestion()
                answerLoop()
                // logging currentAnswerArray and questionArray[currentItem].answers fires different results!
                console.log(questionArray[currentItem].answers);
            }
            
        })
    });
    answerLoop()
};

// Load functions on page load
window.addEventListener('DOMContentLoaded', function () {
    renderQuestions();
});

function nextQuestion() {
    currentItem++
    renderQuestions()
};

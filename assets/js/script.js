
const timeAmount = document.querySelector('#timeAmount');
const highScoresBtn = document.querySelector('#highScoresBtn');

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
        question: 'test two',
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
        question: 'test three',
        // answers array
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
    }
];



// Created quiz box using javascript/ manipulating the DOM
let questionBox = document.querySelector('#questions');

function renderQuestions() {
    
    questionBox.className = 'box';
    questionBox.innerHTML = `<div>
<h2> Quiz Box </h2> <br/>
    <h4>${questionArray[0].question}</h4> <br/>
    <button class="answersBtn btn-1"><h5>${questionArray[0].answers[0].option}</h5></button> <br/>
    <button class="answersBtn btn-2"><h5>${questionArray[0].answers[1].option}</h5></button> <br/>
    <button class="answersBtn btn-3"><h5>${questionArray[0].answers[2].option}</h5></button> <br/>
    <button class="answersBtn btn-4"><h5>${questionArray[0].answers[3].option}</h5></button> <br/>
    </div>`;
    answerFunction()

    
};

function answerFunction () {
    let answersBtns = document.querySelectorAll('.answersBtn');
    console.log(answersBtns);

    answersBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            console.log(e.currentTarget.className);
            if (e.currentTarget.className != 'answersBtn btn-4') {
                return
            } else {
                nextQuestion()
            }
        });
    });
};



function nextQuestion() {
    
    questionBox.className = 'box';
    questionBox.innerHTML = `<div>
<h2> Quiz Box </h2> <br/>
    <h4>${questionArray[1].question}</h4> <br/>
    <button class="answersBtn btn-1"><h5>${questionArray[1].answers[0].option}</h5></button> <br/>
    <button class="answersBtn btn-2"><h5>${questionArray[1].answers[1].option}</h5></button> <br/>
    <button class="answersBtn btn-3"><h5>${questionArray[1].answers[2].option}</h5></button> <br/>
    <button class="answersBtn btn-4"><h5>${questionArray[1].answers[3].option}</h5></button> <br/>
    </div>`;
};

renderQuestions()




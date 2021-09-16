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
        question: 'What is your favourite colour?',
        // answers array (2)
        answers: [
            {
                option: 'Green',
                isCorrect: false
            },
            {
                option: 'Black',
                isCorrect: true
            },
            {
                option: 'Blue',
                isCorrect: false
            },
            {
                option: 'Yellow',
                isCorrect: false
            }
        ]
        // end answers array (2)
    },
    {
        question: 'What is 7 x 8?',
        // answers array
        answers: [
            {
                option: '56',
                isCorrect: true
            },
            {
                option: '49',
                isCorrect: false
            },
            {
                option: '64',
                isCorrect: false
            },
            {
                option: '58',
                isCorrect: false
            }
        ]
        // answers array end
    },
    {
        // questions array (2)
        question: 'What is not a type of food?',
        // answers array (2)
        answers: [
            {
                option: 'Hamburger',
                isCorrect: false
            },
            {
                option: 'Pretzel',
                isCorrect: false
            },
            {
                option: 'Pizza',
                isCorrect: false
            },
            {
                option: 'Cement',
                isCorrect: true
            }
        ]
        // end answers array (2)
    },
    {
        // questions array (2)
        question: 'Does pizza taste good?',
        // answers array (2)
        answers: [
            {
                option: 'No',
                isCorrect: false
            },
            {
                option: 'Yes',
                isCorrect: true
            },
            {
                option: 'No',
                isCorrect: false
            },
            {
                option: 'No',
                isCorrect: false
            }
        ]
        // end answers array (2)
    }
];

const highScoresPage = document.querySelector('.end-game');
// const highScoresPage = document.querySelector('#high-scores');
const timeAmount = document.querySelector('#timeAmount');
const highScoresBtn = document.querySelector('#highScoresBtn');

let quizBox = document.querySelector('#questions');
let questionArea = document.querySelector('.question');
let answersBox = document.querySelector('#answers');
let answerBtns = document.querySelectorAll('#btn');
let restartQuiz = document.querySelector('.restart');

let currentItem = 0;
let currentAnswerArray = questionArray[currentItem].answers;


function runQuiz() {
    highScoresPage.style.display = 'none';
    answersBox.className = 'answers';
    quizBox.className = 'box';
    questionArea.className = 'question';
    questionArea.innerHTML = questionArray[currentItem].question;

    answerBtns.forEach(function (btn, i) {
        btn.innerHTML = questionArray[currentItem].answers[i].option;
        btn.value = questionArray[currentItem].answers[i].isCorrect;
        console.log(btn);
        btn.addEventListener('click', function (e) {
            if (e.currentTarget.value === 'true') {
                currentItem++
                console.log(currentItem);
                if (currentItem >= 5) {
                    console.log('now');
                    quizBox.style.display = 'none';
                    highScoresPage.style.display = 'block';
                    restartQuiz.addEventListener('click', function (e) {
                        resetQuiz()
                    })
                    return
                };
                answerBtns.forEach(function (answer, i) {

                    answer.innerHTML = questionArray[currentItem].answers[i].option;
                    answer.value = questionArray[currentItem].answers[i].isCorrect;
                    console.log(currentItem);
                })
                questionArea.innerHTML = questionArray[currentItem].question;
            } else {

                return
            }
        })
    });
}

function resetQuiz() {
    currentItem = 0;
    quizBox.style.display = 'block';
    highScoresPage.style.display = 'none';
    runQuiz()
}

runQuiz()

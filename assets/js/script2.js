// Created quiz box using javascript/ manipulating the DOM
function renderQuestion(question, index) {
    const questionContainer = document.getElementById('questions')
    questionContainer.innerHTML = '';
    const questionBox = document.createElement('div')
    questionBox.className = 'box'
    questionBox.innerHTML = `
     <h3 class="title">Quiz Box</h3>
            <h4 class="question">${question.question}</h4> `;
    questionContainer.appendChild(questionBox)
    question.answers.forEach((answer, i) => {

        const answerBox = document.createElement('p')

        answerBox.className = 'answers';
        answerBox.innerText = answer.option;

        questionBox.appendChild(answerBox);

        const answerBtn = document.createElement('button')

        answerBtn.className = 'answersBtn'
        answerBtn.innerText = i + 1

        answerBox.appendChild(answerBtn)
        answerBtn.addEventListener('click', (event) => {
            setAnswer(index, i)
        })
    });
};


// question box handling conditional (right[true] vs wrong[false])
// questionIndex | answerIndex \\
function setAnswer(questionIndex, answerIndex) {
    if (questionArray[questionIndex].answers[answerIndex].isCorrect) {
        const nextId = questionIndex + 1
        if (questionArray.length > nextId) {
            renderQuestion(questionArray[nextId], nextId)
        } else {
            renderResult();
        }
    } else {
        timer -= 5;
    }
    console.log(questionIndex, answerIndex)
};



//////////////////////////////////////////////////////////
let currentQuestion = questionArray[currentItem].question;

//////////////////////////////////////////////////////////

// function renderAnswers() {
//     answersBox.className = 'answers';
//     answerBtns[0].innerHTML = `${answer1Html}`;
//     answerBtns[0].value = answer1Value;
//     answerBtns[1].innerHTML = `${answer2Html}`;
//     answerBtns[1].value = answer2Value;
//     answerBtns[2].innerHTML = `${answer3Html}`;
//     answerBtns[2].value = answer3Value;
//     answerBtns[3].innerHTML = `${answer4Html}`;
//     answerBtns[3].value = answer4Value;
// };

// // // //

// let answer1Html = currentAnswerArray[0].option;
// let answer2Html = currentAnswerArray[1].option;
// let answer3Html = currentAnswerArray[2].option;
// let answer4Html = currentAnswerArray[3].option;

// let answer1Value = currentAnswerArray[0].isCorrect;
// let answer2Value = currentAnswerArray[1].isCorrect;
// let answer3Value = currentAnswerArray[2].isCorrect;
// let answer4Value = currentAnswerArray[3].isCorrect;








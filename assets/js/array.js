// function nextQuestion() {
    
//     questionBox.className = 'box';
//     questionBox.innerHTML = `<div>
// <h2> Quiz Box </h2> <br/>
//     <h4>${questionArray[1].question}</h4> <br/>
//     <button class="answersBtn btn-1"><h5>${questionArray[1].answers[0].option}</h5></button> <br/>
//     <button class="answersBtn btn-2"><h5>${questionArray[1].answers[1].option}</h5></button> <br/>
//     <button class="answersBtn btn-3"><h5>${questionArray[1].answers[2].option}</h5></button> <br/>
//     <button class="answersBtn btn-4"><h5>${questionArray[1].answers[3].option}</h5></button> <br/>
//     </div>`;
// };

// //////////////////////////////////////////////////////////

// answersBtns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         if (e.currentTarget.className !== 'answersBtn btn-4') {
//             return
//         } else {
//             nextQuestion()
//         }

//     });
// });

//////////////////////////////////////////////////////////

// let answersBtns = document.querySelectorAll('.answersBtn');
// //     console.log(answersBtns);

// //     answersBtns.forEach(function (btn) {
// //         btn.addEventListener('click', function (e) {
// //             console.log(btn);
// //         });

// //     })
// // };

///////////////////////////////////////////////////////////

 // questionArray.forEach(function (question, i) {
            //     let answers = question;
            //     console.log(question);
            //     answers.forEach(function (answer) {
            //         let answerStatus = answer.isCorrect;
            //         console.log(answerStatus);

            //     });
            // })

// // // // // // // // // // // // // // // // // // // //

// Created quiz box using javascript/ manipulating the DOM
// let questionBox = document.querySelector('#questions');

// function renderQuestions(e) {
//     questionArray.forEach(function (question, i, answers) {
//         let currentQuestion = question.question;
//         console.log(question);
//         let answersArray = question.answers;
//         console.log(answersArray);
        

//         answersArray.forEach(function (group, i) {
//             let answerGroup = group.isCorrect;
            
//             questionBox.className = 'box';
//             questionBox.innerHTML = `<div>
// <h2> Quiz Box </h2> <br/>
//     <h4>${currentQuestion}</h4> <br/>
//     <button class="answersBtn btn-1">${questionArray[0].answers[0].option}</button> <br/>
//     <button class="answersBtn btn-2">${questionArray[0].answers[1].option}</button> <br/>
//     <button class="answersBtn btn-3">${questionArray[0].answers[2].option}</button> <br/>
//     <button class="answersBtn btn-4">${questionArray[0].answers[3].option}</button> <br/>
//     </div>`;

//             let answersBtns = document.querySelectorAll('.answersBtn');
//             answersBtns.forEach(function (btn) {
//                 btn.addEventListener('click', function (e) {
//                     console.log(btn);
                    
//                 });
//             })
//         })
//     })
// }

// function nextQuestion() {

//     questionBox.className = 'box';
//     questionBox.innerHTML = `<div>
// <h2> Quiz Box </h2> <br/>
//     <h4>${questionArray[1].question}</h4> <br/>
//     <button class="answersBtn btn-1"><h5>${questionArray[1].answers[0].option}</h5></button> <br/>
//     <button class="answersBtn btn-2"><h5>${questionArray[1].answers[1].option}</h5></button> <br/>
//     <button class="answersBtn btn-3"><h5>${questionArray[1].answers[2].option}</h5></button> <br/>
//     <button class="answersBtn btn-4"><h5>${questionArray[1].answers[3].option}</h5></button> <br/>
//     </div>`;
// };



// renderQuestions()

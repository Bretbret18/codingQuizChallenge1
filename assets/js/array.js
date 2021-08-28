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
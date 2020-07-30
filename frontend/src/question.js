class Question {
    constructor(text, choices, selection) {
        this.text = text;
        this.choices = choices;
        this.selection = selection;
    }


// const totalAnswers = []

// Question.prototype.selectedAnswer = function(choice) {
//     return totalAnswers.push(choice)
//}

renderQuestion() {
    let questionDiv = document.getElementById("question")
    let optDivA = document.getElementById("opt0")
    let optDivB = document.getElementById("opt1")
    let optDivC = document.getElementById("opt2")
    let optDivD = document.getElementById("opt3")
    
    questionDiv.innerHTML += this.text.forEach

    optDivA.innerHTML += this.choices[0]
    optDivB.innerHTML += this.choices[1]
    optDivC.innerHTML += this.choices[2]
    optDivD.innerHTML += this.choices[3]
    }
}


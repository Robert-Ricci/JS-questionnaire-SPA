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
    let testDiv = document.getElementById("question")
    let optDivA = document.getElementById("optA")
    let optDivB = document.getElementById("optB")
    let optDivC = document.getElementById("optC")
    let optDivD = document.getElementById("optD")
    
    testDiv.innerHTML += this.text
    optDivA.innerHTML += this.choices[0]
    optDivB.innerHTML += this.choices[1]
    optDivC.innerHTML += this.choices[2]
    optDivD.innerHTML += this.choices[3]
    }
}


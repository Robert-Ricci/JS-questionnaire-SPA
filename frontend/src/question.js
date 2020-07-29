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
    let testDiv = document.getElementById("test-container")

    testDiv.innerHTML += 
    `
    <ul>
    <h3> ${this.text}</h3>
    <li> ${this.choices}</li>
    <li> ${this.selection}</li>
    </ul>
    
    `
    }
}
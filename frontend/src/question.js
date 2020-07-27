class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
}

const totalAnswers = []

Question.prototype.selectedAnswer = function(choice) {
    return totalAnswers.push(choice)
}
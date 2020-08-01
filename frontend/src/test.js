class Test {
    constructor(name, questions) {
        this.total = [];
        this.name = name;
        this.questions = questions;
        this.questionIndex = 0;
    }
}

Test.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex]
}

Test.prototype.isEnded = function() {
    return this.testIndex === this.test.length
}
Test.prototype.select = function(selection) {
    if(this.getQuestionIndex().selectedAnswer(selection)) {
        this.total++;
    }

    this.questionIndex++;
}
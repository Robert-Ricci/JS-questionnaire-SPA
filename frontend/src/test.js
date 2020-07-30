class Test {
    constructor(name, questions) {
        this.total = 0
        this.name = name;
        this.questions = questions;
        this.questionIndex = 0;
    }
}

Test.prototype.retrieveQuestionIndex = function() {
    return this.questions[this.questionIndex]
}

Test.prototype.isEnded = function() {
    return this.testIndex === this.test.length
}
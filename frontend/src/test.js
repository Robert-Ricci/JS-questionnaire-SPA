class Test {
    constructor(name, questions) {
        this.selected = [];
        this.name = name;
        this.answers = answers;
        this.questionIndex = 0;
    }


    getQuestionIndex = function() {
        return this.questions[this.questionIndex]
    };

    isEnded = function() {
        return this.questionIndex === this.questions.length
    };

    selected = function(selection) {
        if(this.getQuestionIndex().isSelectedAnswer(selection)) {
        this.selected++;
    }
    console.log(total)
    this.questionIndex++;
};

}
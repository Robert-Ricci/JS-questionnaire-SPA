class Test {
    constructor(name) {
        this.selected = [];
        this.name = name;
        this.questionIndex = 0;
    }


    getQuestionIndex = function() {
        return this.questions[this.questionIndex]
    };

    isEnded = function() {
        return this.questionIndex === this.questions.length
    };

    select = function() {
        if(this.getQuestionIndex().isSelectedAnswer()) {
        this.selected++;
    }
    console.log(selected)
    this.questionIndex++;
};

}
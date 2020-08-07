class Test {
    constructor(name, answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10 ) {
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.answer5 = answer5;
        this.answer6 = answer6;
        this.answer7 = answer7;
        this.answer8 = answer8;
        this.answer9 = answer9;
        this.answer10 = answer10;
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
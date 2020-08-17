class Test {
    constructor(name, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10) {
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

    renderTest () {
        let testDiv = document.getElementById("testResults")


        testDiv.innerHTML += 
    `
    <ul>
    <h3>Name:${this.name}</h3>
    <li>1:${this.answer1}</li>
    <li>2:${this.answer2}</li>
    <li>3:${this.answer3}</li>
    <li>4:${this.answer4}</li>
    <li>5:${this.answer5}</li>
    <li>6:${this.answer6}</li>
    <li>7:${this.answer7}</li>
    <li>8:${this.answer8}</li>
    <li>9:${this.answer9}</li>
    <li>10:${this.answer10}</li>
    </ul>
    `
        
    }
     

}
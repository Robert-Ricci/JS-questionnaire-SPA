class Question {
    constructor(text, choices, selection) {
        this.text = text;
        this.choices = choices;
        this.selection = selection;
    };

//     static all = []

//     static save(arrQues) {
//         this.all.push(arrQues);
//         console.log(all)
//     }

//    static fetchQuestion () {
//     let id = parseInt(++event.target.dataset.id)
//     event.target.dataset.id = id 
//     fetch(`http://127.0.0.1:3000/questions/${id}`)
//     .then(resp => resp.json())
//     .then(json => {
//         let q = new Question( json.text, json.choices, json.selection)
//             q.save;
//               console.log(q)
//     })
    
// }




 renderQuestion() {

    let questionDiv = document.getElementById("question")
    let optDivA = document.getElementById("opt0")
    let optDivB = document.getElementById("opt1")
    let optDivC = document.getElementById("opt2")
    let optDivD = document.getElementById("opt3")
    
    questionDiv.innerHTML = this.text

    optDivA.innerHTML = this.choices[0]
    optDivB.innerHTML = this.choices[1]
    optDivC.innerHTML = this.choices[2]
    optDivD.innerHTML = this.choices[3]
    }

}





document.addEventListener("DOMContentLoaded", () => {
    fetchAdmin()
     nextButton();
    
})

const BASE_URL = "http://localhost:3000"
const options = Array.from(document.getElementsByClassName("option"))

function fetchAdmin () {
    fetch(`${BASE_URL}/admins`)
    .then(resp => resp.json())
    .then(admins => {
        for(const admin of admins){
            let a = new Admin( admin.name, admin.username, admin.email)
            a.renderAdmin();
            console.log(a)
        }
    })
}
function startQuiz() {
    let start = document.getElementById("startButton")
    start.addEventListener("click", fetchQuestion)
    this.onclick = null;
}

function fetchQuestion () {
    let id = parseInt(++event.target.dataset.id)
    event.target.dataset.id = id 
    fetch(`http://127.0.0.1:3000/questions/${id}`)
    .then(resp => resp.json())
    .then(json => {
        let q = new Question( json.text, json.choices, json.selection)
            q.renderQuestion();
              console.log(q)
    })
    this.onclick = null;
}

// function startTest() {
//    const all = Question.all
//    all.forEach((question) => {
//         question.renderQuestion();
//    })
// }

function fetchNextQuestion() {
    let id = parseInt(++event.target.dataset.id)
    event.target.dataset.id = id 
    fetch(`http://127.0.0.1:3000/questions/${id}`)
    .then(resp => resp.json())
    .then(category => {
        let q = new Question(category.text, category.choices, category.selection)
        q.renderQuestion() + 1;
        console.log(category)
    })
}


function nextButton(){
    let button = document.querySelector('button#nextButton') 
    button.addEventListener("click", fetchNextQuestion)}


function saveAnswer () {
    options.forEach((option) => {
        const selectedAnswer = option.target;
            console.log(selectedAnswer)
        })
    }


function showProgress() {
    let currentQuestionNumber = test.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + test.questions.length;
};



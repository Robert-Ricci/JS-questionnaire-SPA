document.addEventListener("DOMContentLoaded", () => {
    fetchAdmin()
    nextButton();
    Question.all
})


const BASE_URL = "http://localhost:3000"

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

function fetchQuestion () {
    fetch(`${BASE_URL}/questions/1`)
    .then(resp => resp.json())
    .then(json => {
        let q = new Question( json.text, json.choices, json.selection)
            q.renderQuestion();
              console.log(q)
    })
    
}


function runTest() {
    let i = 0
    let start = document.getElementById("startButton")
    let next = document.getElementById("nextButton")
    if (start.click === true ){
        fetchCategory();
    }else (next.click === true); {
        fetchCategory() ; 
    }
}

function nextButton(){
    let button = document.querySelector('button#nextButton')
    button.addEventListener("click", fetchCategory)
}

function fetchCategory() {
    let id = parseInt(++event.target.dataset.id)
    event.target.dataset.id = id
    fetch(`http://127.0.0.1:3000/questions/${id}`)
    .then(resp => resp.json())
    .then(category => {
        let q = new Question(category.text, category.choices, category.selection)
        q.renderQuestion();
        console.log(category)
    })
}

function showProgress() {
    let currentQuestionNumber = test.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + test.questions.length;
};


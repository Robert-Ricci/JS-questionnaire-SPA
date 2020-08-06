document.addEventListener("DOMContentLoaded", () => {
    fetchAdmin();
    saveNewTest();
   
})

const BASE_URL = "http://localhost:3000"
const v = []
const MAX_QUESTION = 11

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


function fetchNextQuestion() {
    let button = document.getElementById("nextButton")
    let id = parseInt(++event.target.dataset.id)
    console.log(id)
    event.target.dataset.id = id 
    if(id < MAX_QUESTION){
    fetch(`http://127.0.0.1:3000/questions/${id}`)
    .then(resp => resp.json())
    .then(question => {
        let q = new Question(question.text, question.choices)
        q.renderQuestion();
        saveAnswers();
        let input = document.querySelectorAll("input")
        for(let i of input){
            i.checked = false
            }
            if(id === 10){
                button.innerText = "Submit"
                }
    })
}else {
    
}
}

function nextButton(){
    let button = document.getElementById("nextButton") 
    let id = parseInt(++event.target.dataset.id)
    button.addEventListener("click", () => {
        saveAnswers();
        
    })
    console.log(id)
   
}

function saveAnswers () {
    choices = Array.from(document.getElementsByClassName("option"))
    console.log(choices)
    if(v.length === 0){
    choices.forEach(choice => {
        choice.addEventListener("click", e => {
            let selectedChoice = e.target.value
            console.log('selected choice', selectedChoice)
            v.push(selectedChoice);
             console.log('v', v)
        })
    })
 }
 }


function saveNewTest () {
   let testForm = document.getElementById("test-form")
   let name = document.getElementById("name")
    testForm.innerHTML += 
        `
        <form>
            Name: <input type="text" id="name"><br>
        </form>
        `
        testForm.addEventListener("submit", testFormSubmission)

    }
    
    function testFormSubmission(){
        event.preventDefault();
        let name = document.getElementById("name").value
        

        let test = {
            name: name,
        }
    
        fetch(`${BASE_URL}/tests`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(test)
        })
        .then(resp => resp.json())
        .then(test => {
            let t  = new Test(test.name)
            console.log(t)
    })
    
    
    }
function showProgress() {
    let currentQuestionNumber = Questions.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + test.questions.length;
};


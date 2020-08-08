document.addEventListener("DOMContentLoaded", () => {
    fetchAdmin();
    resetTest();
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
        }
    })
}

function fetchNextQuestion() {
    const testContainerDiv = document.getElementById("test-container")
    testContainerDiv.style.display = "block"
    let button = document.getElementById("nextButton")
    let id = parseInt(++event.target.dataset.id)
    event.target.dataset.id = id 
    if(id < MAX_QUESTION){
    fetch(`http://127.0.0.1:3000/questions/${id}`)
    .then(resp => resp.json())
    .then(question => {
        let q = new Question(question.text, question.choices)
        q.renderQuestion();
        showProgress();
        saveAnswers();
        let input = document.querySelectorAll("input")
        for(let i of input){
            i.checked = false
            }
            if(id === 10){
                button.innerHTML = "Submit"
                saveNewTest();
                resetButton.style.display = "block"
                }
    })
}else {
    if(id = MAX_QUESTION){
        let questionDiv = document.getElementById("question")
        let optDivA = document.getElementById("opt0")
        let optDivB = document.getElementById("opt1")
        let optDivC = document.getElementById("opt2")
        let optDivD = document.getElementById("opt3")
        
        
        questionDiv.innerText = "Test Complete. Push reset for new test";
        
        optDivA.innerHTML = ''
        optDivB.innerHTML = ''
        optDivC.innerHTML = ''
        optDivD.innerHTML = ''
        
    }
}

}

function resetTest() {
    const resetButton = document.getElementById("resetButton")
    resetButton.addEventListener("click", () =>{
        return window.location.assign("index.html")
    })
    
}

function nextButton(){
    let button = document.getElementById("nextButton") 
    let id = parseInt(++event.target.dataset.id)
    button.addEventListener("click", () => {
        saveAnswers();
        
    })
}

function saveAnswers () {
    let choices = Array.from(document.getElementsByClassName("option"))
    if(v.length === 0){
       choices.forEach(choice => {
        choice.addEventListener("click", e => {
             selectedChoice = e.target.value
            v.push(selectedChoice);
             return v;
        })
        
    })  
}
 }

function saveNewTest () {
   let testForm = document.getElementById("test-form")
   let button = document.getElementById("nextButton")
    testForm.innerHTML += 
        `
        <form>
            Name: <input type="text" id="name"><br>
        </form>
        `
       button.addEventListener("click", testFormSubmission)

    }
    
    function testFormSubmission(){
        event.preventDefault();
        let name = document.getElementById("name").value
        let selected = v
        
        let test = {
            name: name,
            answer1: selected[0],
            answer2: selected[1],
            answer3: selected[2],
            answer4: selected[3],
            answer5: selected[4],
            answer6: selected[5],
            answer7: selected[6],
            answer8: selected[7],
            answer9: selected[8],
            answer10: selected[9]
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
            let t  = new Test(test.name,test.answer1,test.answer2,test.answer3,test.answer4,test.answer5,test.answer6,test.answer7,test.answer8,test.answer9,test.answer10 )
    })
    
    }


function showProgress() {
    let currentQuestionNumber = v.length + 1;
    const progressBarFill = document.getElementById("progressBarFill")
    const progressBar = document.getElementById("progressBar")
    let element = document.getElementById("progress");
    progressBar.style.display ="block"
    element.innerHTML = "Question " + currentQuestionNumber + " of " + (MAX_QUESTION - 1);
    progressBarFill.style.width = `${(currentQuestionNumber / (MAX_QUESTION - 1)) * 100}%`;
}


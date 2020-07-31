document.addEventListener("DOMContentLoaded", () => {
    fetchAdmin()
    //fetchQuestion()
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
    fetch(`${BASE_URL}/questions`)
    .then(resp => resp.json())
    .then(questions => {
        for(const que of questions){
            let q = new Question( que.text, que.choices, que.selection)
             q.renderQuestion();
             console.log(q)
        }
    })
}




document.addEventListener("DOMContentLoaded", () => {
    fetchTests();
    backToTest();
})

const BASE_URL = "http://localhost:3000"

function fetchTests () {
    
    fetch(`${BASE_URL}/tests/`)
    .then(resp => resp.json())
    .then(tests => {
        for(const test of tests){
            let t = new Test( test.name,test.answer1,test.answer2,test.answer3,test.answer4,test.answer5,
                    test.answer6,test.answer7,test.answer8,test.answer9,test.answer10 )
            t.renderTest();
            console.log(t)
        }
    })
}

function backToTest () {
    let button = document.getElementById("back")
    button.addEventListener("click", () => {
        return window.location.assign("index.html")
    })
}
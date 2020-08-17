document.addEventListener("DOMContentLoaded", () => {
    fetchTests();
    backToTest();
})

const BASE_URL = "http://localhost:3000"

function fetchTests () {
    
    fetch(`${BASE_URL}/tests/`)
    .then(resp => resp.json())
    .then(tests => {
        let sortArr = tests.sort(compare)
        for(const test of sortArr){
            let t = new Test( test.name,test.answer1,test.answer2,test.answer3,test.answer4,test.answer5,
                    test.answer6,test.answer7,test.answer8,test.answer9,test.answer10 )
            t.renderTest();
        }
    })
}

function compare(a,b) {
    let comparison = 0
    let aName = a.name
    let bName = b.name

    if(aName > bName) {
        comparison = 1
    }else if(aName  < bName){
        comparison = -1
    }
    return comparison 
}


function backToTest () {
    let button = document.getElementById("back")
    button.addEventListener("click", () => {
        return window.location.assign("index.html")
    })
}
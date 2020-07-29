document.addEventListener("DOMContentLoaded", () => {
    fetchAdmin()
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
            console.log(questions)
        }
    })
}

// const questions = [
//     new Question(" 1) You’re in the cafeteria and it is time for school store. You’re a Positive and you brought a dollar so you can get a snack. However someone at your table is a Neutral and can’t get their own snacks. They pass you their dollar to buy a snack for them. What do you do?",
//      ["A -You say no. Go to the school store and share your snack with the Neutral who wasn’t allowed to buy their own.",
//      "B -You take their dollar and buy them the snack they wanted because Mr. Phillips isn’t here today and he won’t find out about it.",
//      "C- You say no. Go to the school store and get your snack for yourself.",
//      "D- You take their dollar and buy yourself a snack, which is their fault anyway because they should have their rating up."]),
    
//      new Question(" 2) You’re taking a test in Mr. B’s room. The desks are in testing formation so no one can cheat. However you notice the student in front of you does have their test on the desk in just a way that you can make out the correct multiple choice answers. What do you do?",
//     ["A -You notice that the student has one of the answers wrong and you try to signal them so they can change it to the correct answer.",
//     "B -You go about finishing your test and turn it in with the answers that you had.", 
//     "C- You straight copy that test because Mr. B didn’t even teach any of this stuff and you’re not going to need to know it in the real world anyway.",
//     "D- You look at the other student’s test just to make sure your answers match but you don’t change any of your own. "]),
    
//     new Question(" 3) At gym you over hear a group of students talking about someone else. They’re saying nasty things and talking about jumping that student in the cafeteria or on the bus. What do you do?",
//     ["A- You mind your own business. Stay out of it. And you get a good seat in the cafeteria to watch the fight go down.",
//     "B- You bring staff on board. During transition you approach your favorite staff member and explain the situation.",
//     "C- You confront the students. You tell them to not to fight in school or it is going to get them suspended or drop their rating. Tell them to fight the other student outside of school.",
//     "D- You confront the students. You tell them that what they’re doing is sneak dissing and if they have anything to say they ought to say it to the person’s face."]),
    
//     new Question(" 4) You're in line, in the hallway, during bathroom break. The students in front of you are talking. Mr. Graham is talking to them about what they did over the weekend. What do you do?",
//     ["A- You add what you did over the weekend to their conversation because your were awesome at Fortnight and you want to share. Besides, Mr. Graham is a teacher and if he is talking then it probably isn't a big deal",
//     "B- You redirect the students and Mr. Graham because talking in the hallway is a norms violation and the situation is creating a norms crisis.",
//     "C- You keep quiet. Talking in the hallway is a norms violation. There is no reason to ever talk in the hallway.", 
//     "D- You talk to the student behind you who is quiet right now, but you know plays Fortnight. You're only waiting in line for the bathroom and if Mr. Graham isn't redirecting anyone else for talking then it must be fine. Besides, Mr Phillips isn't around anyway."]),
    
//     new Question(" 5) You're doing iLit in Mr. Shazer's classroom. His instruction was for you to complete your Interactive Reader and when you're finished with that you are expected to complete one of the grammar lessons. You scored a four on your Interactive Reader and Mr. Phillips just shouted 'Five minutes!'", 
//     ["A- You go to Cool Math and start playing Running Man. There is only five minutes left. You finished your Interactive Reader and got a four.", 
//     "B- You put your head down because Mr. Shazer is at his desk and can't see you. You finished your Interactive Reader. There is only five minutes left. ", 
//     "C- With the last five minutes of class time you turn to talk to the student next to you distracting them from completing their Interactive Reader. There is only five minutes left and they're not going to finish anyway.",
//     "D- You click the grammar lesson you were expected to do. You answer questions until it is time to line up. You love iLit!"]), 

//     new Question("6) It is lunch time, Mr. Johns and Mr. Parks are in the cafeteria. They're talking and laughing with each other. You hear Mr. John's cuss. His voice is low and no one else heard it. Then he does it again. Mr Parks would have heard it too. However he is laughing at Mr. Johns' story.", 
//     ["A -You turn to the other students at the table and tell them what you heard. Together you tease Mr. Johns for being a teacher and breaking a norm.",
//     "B - You redirect Mr. Johns for cussing. At Clayton Academy we do not cuss. Then you tease him that he needs to take ownership at assembly.", 
//     "C - You bring staff on board and tell Mr. Phillips what you heard Mr. Johns say. ", 
//     "D - You let the moment pass but a couple weeks later when Mr. Johns redirects you for cussing, you tell him you don't have to listen because you heard him cuss before."]),

//     new Question("7) It is early in the morning and you are on the bus with your head down. You are trying to sleep when you smell something. It is weed. Someone on the bus is smoking weed.",
//     ["A - You're not at school yet, you stick your head up and look to see if you can find out who is smoking. You find it and take a puff. Just one because you're not even at school yet.", 
//     "B - You know what the smell is and you keep your head down. Go back to sleep and wait to arrive at school.", 
//     "C - You blow up what is going on and when the bus driver says she is going to make a report about what is going on you cuss at her. She could just be cool. She doesn't have to snitch.",
//     "D - When the bus arrives at school everyone is pulled out of the bus and taken into school. Ms. Brown wants to know which students were smoking. You point out each one of the students because you didn't smoke and neither should they. "]), 

//     new Question("8) You're in the classroom during group, but the speaker had to step out into the hallway because of an emergency call on her cell phone. You happen to notice that Mr. K's wallet is hanging out of the pocket of his jacket. He isn't in the room either. No one would see you if you took it. ", 
//     ["A - No one is in the room so you get up and grab the wallet. You take out the cash and put it in your pocket. No one saw knows what you did so you're not going to get caught.", 
//     "B - You leave it go and put your head down until the speaker comes back. No one should go behind a teacher's desk anyway. So it will probably be safe. ", 
//     "C - You grab the wallet. Then you show what you did to all the other students. Offer them a cut of the cash. Then you put the wallet back because you don't want to make Mr. K have to go and get a new ID.", 
//     "D - You wait for the speaker to come back and finish group. While you do you watch anyone who moves closely to Mr. K's desk. You don't want to tip anyone else off that the wallet is there and you want to make sure no one tries to steal it."]), 

//     new Question("9) Ms. Hill is running school store. You don't have enough for chips, candy, and an iced tea. She offers to let you have the tea but you have to pay her for it tomorrow.", 
//     ["A - You take advantage of Ms. Hill's offer. You take the candy, chips, and iced tea but you're not going to bring in the money. It is her fault. She shouldn't offer free stuff and expect you to pay for it.",
//      "B- You thank her for the offer. You take the iced tea. It tastes good. Tomorrow you give her the extra money you owe her and you thank her again.",
//     "C - You thank her for letting you get extra snacks. You go back to the cafeteria and tell the other students at your table. They can still get snacks even if they don't have any money.", 
//     "D - You thank Ms. Hill and tell her that you'll just take the chips and candy. She doesn't have to make an exception for you. "]), 

//     new Question("10) You're in class and a student is being disrespectful. They're cussing and not accepting redirection. The teacher is going up his levels and is now escorting the student out in the hallway.",
//     ["A - You laugh at the student and make fun of them. “You're going to get into a hold,” is what you tease the student with.", 
//      "B - You look down at your desk and go about finishing the assignment that has been interrupted. While the teacher is in the hallway with the student you think to yourself “They're going to get into a hold.", 
//     "C - You speak up at the student. Trying to get them to stop the behavior that is getting redirected. “You're going to get into a hold,” is what you tell them.", 
//     "D - You look at the new student in class who is watching the same scene as you, “They're going to get into a hold,” is what you explain to the new student about what is going on in class."])
// ];
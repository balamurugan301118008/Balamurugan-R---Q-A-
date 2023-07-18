const Questions = [{
    ques: "1.) Where is the DCKAP Office located in India?",
    result: "Chennai",
    ans: [{ text: "Trichy" }, { text: "Madurai" }, { text: "Chennai" }, { text: "Kovai" }]
}, {
    ques: "2.) Who is the CEO of Google??",
    result: "Sundar Pichai",
    ans: [{ text: "Sundar Pichai" }, { text: "Elon mask" }, { text: "Ratna tata" }, { text: "Ambani" }]
}, {
    ques: "3.) Which state in India has the most women?",
    result: "Kerala",
    ans: [{ text: "TamilNadu" }, { text: "Mumbai" }, { text: "Kerala" }, { text: "Andhra Pradesh" }]
}, {
    ques: "4.) Which is the most populous country in the world?",
    result: "China",
    ans: [{ text: "India" }, { text: "China" }, { text: "USA" }, { text: "England" }]
}, {
    ques: "5.)Each year World Red Cross Day is celebrated on?",
    result: "May 08",
    ans: [{ text: "May 18" }, { text: "May 08" }, { text: "June 9" }, { text: "May 18" }]
}, {
    ques: "6.)Film and TV institute of India is located at?",
    result: "Pune",
    ans: [{ text: "Gujarat" }, { text: "TamilNadu" }, { text: "Pune" }, { text: "Chennai" }]
}, {
    ques: "7.)During World War II, when did Germany attack France?",
    result: "1940",
    ans: [{ text: "1942" }, { text: "1940" }, { text: "1947" }, { text: "1952" }]
}, {
    ques: "8.)Filaria is caused by?",
    result: "Mosquito",
    ans: [{ text: "Bacteria" }, { text: "Virus" }, { text: "Mosquito" }, { text: "Protozoa" }]
}, {
    ques: "9.)For galvanizing iron which of the following metals is used?",
    result: "Orissa",
    ans: [{ text: "Copper" }, { text: "Lead" }, { text: "Zinc" }, { text: "Aluminium" }]
}, {
    ques: "10.)Durand Cup is associated with the game of?",
    result: "Football",
    ans: [{ text: "Cricket" }, { text: "Hockey" }, { text: "Volleyball" }, { text: "Football" }]
}
];
// target to the all Elements 
const startBtn = document.querySelector(".startBtn")
const container = document.querySelector(".innerContainer")
const questions = document.querySelector('.questionOne')
const totalAnswers = document.querySelectorAll('.Answers')
const showresult = document.querySelector(".showAnswer")
const NextBtn = document.querySelector(".nextbtn")
const end = document.querySelector(".end")

// starting postions code 
startBtn.addEventListener("click", (e) => {
    startBtn.style.display = "none";
    container.style.display = "block";
})


// asing variable for store index value 
let num = 0;

// showing 0 index question on the quiz  
questions.innerText = Questions[0].ques;
totalAnswers[0].innerText = Questions[0].ans[0].text;
totalAnswers[1].innerText = Questions[0].ans[1].text;
totalAnswers[2].innerText = Questions[0].ans[2].text;
totalAnswers[3].innerText = Questions[0].ans[3].text;

// addinng event listener for next button when click the button it increse the index values one by one 
let onetime = 1
NextBtn.addEventListener("click", (e) => {
    onetime = 1;
    num++
    if (num == Questions.length) {
        container.style.display = "none";
        end.style.display = "block";
    }
    e.target = questions.innerText = Questions[num].ques;
    e.target = totalAnswers[0].innerText = Questions[num].ans[0].text;
    e.target = totalAnswers[1].innerText = Questions[num].ans[1].text;
    e.target = totalAnswers[2].innerText = Questions[num].ans[2].text;
    e.target = totalAnswers[3].innerText = Questions[num].ans[3].text;
})


for (let i = 0; i < totalAnswers.length; i++) {
    totalAnswers[i].addEventListener("click", (e) => {
        let onetimes = onetime++
        let tar = e.target.innerText
        if (onetimes == 1) {
            if (Questions[num].result == tar) {
                ShowAlert("Correct!", "green", "rgb(94, 189, 94)")
            }
            else {
                ShowAlert("Wrong!", "red", "rgb(238, 149, 149)")
            }
        }
    })
}
// this code is settime codes 
function ShowAlert(text, color, back) {
    showresult.innerText = text;
    showresult.style.color = color;
    showresult.style.backgroundColor = back;
    setTimeout(() => {
        showresult.innerText = "";
        showresult.style.color = "";
        showresult.style.backgroundColor = "";
    }, 500);
}
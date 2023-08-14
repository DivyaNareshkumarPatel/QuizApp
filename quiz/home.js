var t = 30;
const question = [
    {
        question: 'OS computer abbreviation usually means?',
        answer: [
            { text: "Order of Significance", option: false },
            { text: "Open Software", option: false },
            { text: "Operating System", option: true },
            { text: "Optical Sensor", option: false }
        ]
    },
    {
        question: '.MOV extension refers usually to what kind of file?',
        answer: [
            { text: "Image file", option: false },
            { text: "Animation/movie file", option: true },
            { text: "Audio file", option: false },
            { text: "MS Office document", option: false }
        ]
    },
    {
        question: '.BAT extension file refers usually to what kind of file?',
        answer: [
            { text: "Compressed Archive file", option: false },
            { text: "System file", option: true },
            { text: "Audio file", option: false },
            { text: "Bachup file", option: false }
        ]
    },
    {
        question: 'DB computer abbreviation usually means?',
        answer: [
            { text: "Database", option: true },
            { text: "Double Byte", option: false },
            { text: "Data Block", option: false },
            { text: "Data Boot", option: false }
        ]
    },
    {
        question: 'How many bits is a byte?',
        answer: [
            { text: "4", option: false },
            { text: "32", option: false },
            { text: "16", option: false },
            { text: "8", option: true }
        ]
    }
]
const webQues = document.querySelector(".question");
const ansBtn = document.querySelector(".options");
let Index = 0;
let score = 0;

function Start() {
    t = 30;
    function time() {
        if (t >= 0 && t <= 9) {
            document.querySelector("#time").innerHTML = "0" + t;
        }
        else {
            document.querySelector("#time").innerHTML = t;
        }
        if (t <= 0) {
            t = 30;
            nextQuestion();
        }
        document.querySelector(".line2").style.width = `${((30 - t + 1) * 100 / 30)}%`;
        t--;
    }
    document.querySelector(".body").classList.remove("start");
    document.querySelector(".body").classList.remove("end");
    document.querySelector(".body").classList.add("quiz");
    setInterval(() => time(), 1000);
    Index = 0;
    score = 0;
    showQue();
}
let currentQuestion;
let queNo;
let correct;
function showQue() {
    reset();
    currentQuestion = question[Index];
    queNo = Index + 1;
    document.getElementById("qN").innerHTML = queNo;
    webQues.innerHTML = currentQuestion.question;
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text
        if (answer.option == true) {
            correct = button;
        }
        button.classList.add("option");
        ansBtn.appendChild(button);
        button.addEventListener("click", selectAnswer);
    })
    Index++;
}
function reset() {
    t = 30
    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild)
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    let correctOption;
    let i;
    for (i = 0; i < 4; i++) {
        if (currentQuestion.answer[i].option == true) {
            correctOption = currentQuestion.answer[i].text;
        }
    }
    if (correctOption == selectedBtn.innerHTML) {
        selectedBtn.style.background = '#9aeabc';
        score++;
    }
    else {
        selectedBtn.style.background = '#ff9393';
    }
    correct.style.background = '#9aeabc';
    t = 30;
    setTimeout(nextQuestion, 500);
}
function nextQuestion() {
    t = 30;
    if (Index >= 5) {
        endQuiz();
    }
    else {
        showQue();
    }
}
function endQuiz() {
    t=30;
    document.querySelector(".line2").style.width = `0%`;
    document.querySelector(".body").classList.remove("quiz");
    document.querySelector(".body").classList.add("end");
    document.querySelector(".score").innerHTML = score;
}
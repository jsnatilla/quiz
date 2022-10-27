const Questions = [{
        id: 0,
        q: "Who opened the chamber of secrets?",
        a: [{ text: "Harry Potter", isCorrect: false },
            { text: "Hermione", isCorrect: false },
            { text: "Ron", isCorrect: false },
            { text: "Tom Riddle", isCorrect: true }
        ]

    },
    {
        id: 1,
        q: "What was the three-headed dog called?",
        a: [{ text: "Biscuit", isCorrect: false, isSelected: false },
            { text: "Poof", isCorrect: false },
            { text: "Ruff", isCorrect: false },
            { text: "Fluffy", isCorrect: true }
        ]

    },
    {
        id: 2,
        q: "What was Ron's favorite pie in the books?",
        a: [{ text: "Pumpkin pie", isCorrect: false },
            { text: "Treacle Tart", isCorrect: true },
            { text: "Peach Pie", isCorrect: false },
            { text: "Cherry Pie", isCorrect: false }
        ]

    }

]

// Set start
var start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");


    // Setting the question text
    question.innerText = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "orange";
        op2.style.backgroundColor = "AliceBlue";
        op3.style.backgroundColor = "AliceBlue";
        op4.style.backgroundColor = "AliceBlue";
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "AliceBlue";
        op2.style.backgroundColor = "orange";
        op3.style.backgroundColor = "AliceBlue";
        op4.style.backgroundColor = "AliceBlue";
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "AliceBlue";
        op2.style.backgroundColor = "AliceBlue";
        op3.style.backgroundColor = "orange";
        op4.style.backgroundColor = "AliceBlue";
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "AliceBlue";
        op2.style.backgroundColor = "AliceBlue";
        op3.style.backgroundColor = "AliceBlue";
        op4.style.backgroundColor = "orange";
        selected = op4.value;
    })

    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("check");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "CORRECT";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "INCORRECT";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }

})

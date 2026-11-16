// Quiz: checks the selected answers and shows the score
function checkQuiz() {
    var score = 0;

    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');
    var q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 !== null && q1.value === "a") {
        score = score + 1;
    }
    if (q2 !== null && q2.value === "b") {
        score = score + 1;
    }
    if (q3 !== null && q3.value === "b") {
        score = score + 1;
    }

    document.getElementById("quiz-result").textContent = "You scored " + score + " out of 3!";
}

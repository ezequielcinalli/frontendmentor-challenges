"use strict";
document.addEventListener("DOMContentLoaded", init());

function init() {
    // Find nodes
    const question1 = document.getElementById("question1");
    const question2 = document.getElementById("question2");
    const question3 = document.getElementById("question3");
    const question4 = document.getElementById("question4");
    const question5 = document.getElementById("question5");

    // Add listeners
    question1.addEventListener("click", () => toggleAnswer(question1));
    question2.addEventListener("click", () => toggleAnswer(question2));
    question3.addEventListener("click", () => toggleAnswer(question3));
    question4.addEventListener("click", () => toggleAnswer(question4));
    question5.addEventListener("click", () => toggleAnswer(question5));

    // Close the current open answer and open the new answer 
    function toggleAnswer(question) {
        document.querySelectorAll(".question").forEach(q => {
            if (q != question)
                q.classList.remove("question-open");
        })
        question.classList.toggle("question-open");
    }
}
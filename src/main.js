"use strict";

const displayBtn = document.querySelectorAll(".question-container");
const icons = document.querySelectorAll(".icon");
const answer = document.querySelectorAll(".answer-container");

displayBtn.forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const currentIcon = icons[index];
    const currentAnswer = answer[index];

    currentAnswer.classList.toggle("active");
    currentAnswer.classList.toggle("deactivated");

    if (currentIcon.src.endsWith("icon-plus.svg")) {
      currentIcon.src = "icon-minus.svg";
    } else {
      currentIcon.src = "icon-plus.svg";
    }
  });
});

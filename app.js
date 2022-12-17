"use strict";

const projectOneBtn = document.querySelector(".p1btn");
const projectTwoBtn = document.querySelector(".p2btn");
const projectThreeBtn = document.querySelector(".p3btn");

projectOneBtn.addEventListener("click", () => {
  alert("This Meal app is under development, please check in some other time");
});

projectTwoBtn.addEventListener("click", () => {
  alert(
    "This Recipe app is under development, please check in some other time"
  );
});

projectThreeBtn.addEventListener("click", () => {
  alert(
    "This Portfolio app is under development, please check in some other time"
  );
});

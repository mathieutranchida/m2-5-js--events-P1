// Exercise 1.2
// ------------
console.log("exercise 1.2");

let body = document.querySelector("body");

let timerText = document.getElementById("time");
let timer = Math.floor(Math.random() * 5000 + 1);
timerText.innerText = Math.round(timer / 1000);

let win = false;
let timedOut = false;
body.addEventListener("click", () => {
  if (timedOut !== true && win === false) {
    win = true;
    let youWin = document.createElement("p");
    youWin.innerHTML = "You Win!";
    body.appendChild(youWin);
  }
});

const timout = setTimeout(() => {
  timedOut = true;
  if (win !== true) {
    let youLose = document.createElement("p");
    youLose.innerHTML = "You Lose!";
    body.appendChild(youLose);
  }
}, timer);

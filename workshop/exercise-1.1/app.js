// Exercise 1.1
// ------------
console.log("exercise 1.1");

let body = document.querySelector("body");

let h1 = document.createElement("h1");
h1.innerHTML = "Be a quicker clicker!";
body.appendChild(h1);

let youWin = document.createElement("p");
youWin.innerText = "You Win!";

let youLose = document.createElement("p");
youLose.innerText = "You Lose!";

let clicked = false;
body.addEventListener("click", () => (clicked = true));

let timeOut = setTimeout(() => {
  if (clicked === true) {
    body.appendChild(youWin);
  } else {
    body.appendChild(youLose);
  }
}, 1000);

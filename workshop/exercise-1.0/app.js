// Exercise 1.0
// ------------
console.log("exercise-1");

let body = document.querySelector("body");
let p = document.createElement("p");
p.innerHTML = "You win!";

let showP = () => body.appendChild(p);

body.addEventListener("click", showP);

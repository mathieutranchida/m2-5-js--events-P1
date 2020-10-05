let main = document.getElementById("main");
main.style.margin = "0px auto";

function addEventListenerToButton(givenButton) {
  function switchButtonColor() {
    if (givenButton.style.backgroundColor === "green") {
      givenButton.style.backgroundColor = "red";
    } else {
      givenButton.style.backgroundColor = "green";
    }
  }
  givenButton.addEventListener("click", switchButtonColor);
}

for (let i = 1; i <= 20; i++) {
  let button = document.createElement("button");
  button.id = `button-#${i}`;
  button.innerText = i;
  main.appendChild(button);
  button.style.height = "125px";
  button.style.width = "125px";
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.fontSize = "15pt";
  button.style.border = "2px solid white";
  addEventListenerToButton(button);
}

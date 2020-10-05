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
  button.style.position = "absolute";
  button.style.top = `${Math.random() * 100}%`;
  button.style.left = `${Math.random() * 100}%`;
  button.style.height = "75px";
  button.style.width = "75px";
  button.style.borderRadius = "50%";
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.fontSize = "15pt";
  button.style.border = "2px solid white";
  addEventListenerToButton(button);
}

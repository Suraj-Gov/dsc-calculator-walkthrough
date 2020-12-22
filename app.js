const buttons = document.querySelectorAll("button");
const display = document.querySelector("h3");

function handleClick(buttonText) {
  const isNotNumber = isNaN(buttonText);
  if (!isNotNumber) {
    if (display.innerText === "0") {
      display.innerText = buttonText;
      return;
    }
    if (display.innerText.length < 12) {
      display.innerText += buttonText;
    }
  } else {
    switch (buttonText) {
      case "+":
        console.log("added");
        break;
      case "-":
        console.log("subtracted");
        break;
      case "x":
        console.log("multiplied");
        break;
      case "/":
        console.log("divided");
        break;
      case "C":
        display.innerText = "0";
        break;
      case ".":
        if (!display.innerText.includes(".")) {
          display.innerText += ".";
        }
        break;
      default:
        console.log("unexpected button press", buttonText);
        break;
    }
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    handleClick(event.target.innerText);
  });
});

const buttons = document.querySelector(".buttons");
const result = document.querySelector(".result");

buttons.addEventListener("click", (e) => {
  //Om något som inte är en button klickas så returneras ingenting
  if (!e.target.closest("button")) {
    return;
  }

  const key = e.target;
  const keyValue = e.target.innerHTML;

  //Display
  const displayValue = result.innerHTML;

  if (displayValue === "0") {
    result.innerHTML = keyValue;
  } else {
    result.innerHTML = displayValue + keyValue;
  }

  //När jag trycker på = så händer detta
  if (key.classList.contains("equals")) {
    result.innerHTML = eval(result.innerHTML.slice(0, -1));
  }

  //clears the calculator
  if (key.classList.contains("clear")) {
    result.innerHTML = "0";
  }
});

// let button = document.querySelector(".btn");
// let result = document.querySelector(".result");

// button.addEventListener("click", () => {
//   let numb1 = +document.querySelector("#number1").value;
//   let numb2 = +document.querySelector("#number2").value;

//   let sum = numb1 + numb2;

//   result.textContent = `Bu sonlarni summasi: ${sum}`;
// });

const numberInput = document.getElementById("numberInput");
const sendButton = document.getElementById("sendButton");
const decrementButton = document.getElementById("decrementButton");
const incrementButton = document.getElementById("incrementButton");
const numberDisplay = document.getElementById("numberDisplay");
const colorInput = document.getElementById("colorInput");

sendButton.addEventListener("click", function () {
  const enteredNumber = parseInt(numberInput.value, 10);
  if (!isNaN(enteredNumber)) {
    numberDisplay.textContent = enteredNumber;
  } else {
    alert("Пожалуйста, введите корректное число");
  }
});

decrementButton.addEventListener("click", function () {
  let currentNumber = parseInt(numberDisplay.textContent, 10);
  numberDisplay.textContent = currentNumber - 1;
});

incrementButton.addEventListener("click", function () {
  let currentNumber = parseInt(numberDisplay.textContent, 10);
  numberDisplay.textContent = currentNumber + 1;
});

colorInput.addEventListener("input", function () {
  document.body.style.backgroundColor = colorInput.value;
});

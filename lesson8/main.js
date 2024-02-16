// task1

// const textInput = document.querySelector("#textInput");
// const listElement = document.querySelector("#list");

// textInput.addEventListener("keyup", (event) => {
//   if (event.code === "Enter") {
//     const liElement = document.createElement("li");
//     liElement.innerText = event.target.value;
//     listElement.appendChild(liElement);

//     textInput.value = "";
//   }
// });

//task2
// const input = document.getElementById("textInput");
// input.addEventListener("keyup", (event) => {
//   console.log(input.value);
// });

//task3
// const input = document.getElementById("textInput");
// const ulElement = document.getElementById("ulElement");
// const form = document.getElementById("form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const liElement = document.createElement("li");
//   liElement.textContent = input.value.trim();
//   ulElement.appendChild(liElement);
//   input.value = "";
// });

// task4
// const firstNum = document.getElementById("firstNum");
// const secondNum = document.getElementById("secondNum");
// const calc = document.getElementById("calc");
// const result = document.getElementById("result");
// const selectArifm = document.getElementById("selectArifm");
//4.1
// calc.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const firstNumber = parseFloat(firstNum.value);
//   const secondNumber = parseFloat(secondNum.value);
//   const selectOperation = selectArifm.value;
//   if (selectOperation === "+") {
//     result.textContent = firstNumber + secondNumber;
//   } else if (selectOperation === "-") {
//     result.textContent = firstNumber - secondNumber;
//   } else if (selectOperation === "*") {
//     result.textContent = firstNumber * secondNumber;
//   } else if (selectOperation === "/") {
//     result.textContent = firstNumber / secondNumber;
//   }
// });
//4.2
// calc.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const firstNumber = parseFloat(firstNum.value);
//   const secondNumber = parseFloat(secondNum.value);
//   const selectOperation = selectArifm.value;
//   evalMethod = `${firstNumber} ${selectOperation} ${secondNumber}`;
//   result.textContent = eval(evalMethod);
//   return result;
// });

//task 5
const clickBtn = document.getElementById("clickBtn");
function getRandomColorBtn() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function getRandomBtn() {
  return Math.floor(Math.random() * 361) - 180;
}

clickBtn.addEventListener("mouseenter", () => {
  clickBtn.style.color = getRandomColorBtn();
});
clickBtn.addEventListener("mouseleave", () => {
  clickBtn.style.transform = `rotate(${getRandomBtn()}deg)`;
});
//task
// const users = [
//   {
//     email: "dfdfsf.com",
//     password: "dfsdfs",
//   },
//   {
//     email: "dfdfsf.com",
//     password: "dfsdfs",
//   },
//   {
//     email: "saya.com",
//     password: "saya555",
//   },
// ];
// function login(email, password) {
//   for (const user of users) {
//     if (user.email !== email) {
//       return "Пользователь не найден";
//     }
//     if (user.password !== password) {
//       return "Неверный пароль";
//     }
//     return "успешно";
//   }
// }

// const logInBtn = document.querySelector("");

// logInBtn;

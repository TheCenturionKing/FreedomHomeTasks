//task1
// const addTask = document.getElementById("addTask");
// const inputTask = document.getElementById("inputTask");
// const ulElement = document.getElementById("ulElement");

// addTask.addEventListener("submit", (event) => {
//   event.preventDefault();
//   if (inputTask.value !== "") {
//     const liElement = document.createElement("li");
//     liElement.className = "list-group-item";
//     ulElement.appendChild(liElement);
//     const createValueTask = document.createElement("input");
//     createValueTask.value = inputTask.value;
//     createValueTask.className = "form-check-input me-1";
//     createValueTask.type = "checkbox";
//     createValueTask.style.alignItems = "center";
//     createValueTask.style.textAlign = "center";
//     liElement.appendChild(createValueTask);
//     const createLabel = document.createElement("label");
//     createLabel.className = "form-check-label";
//     createLabel.htmlFor = createValueTask.id;
//     createLabel.textContent = inputTask.value;

//     liElement.appendChild(createLabel);
//     const deleteBtn = document.createElement("button");
//     deleteBtn.className = "btn btn-danger";
//     deleteBtn.textContent = "Delete";
//     deleteBtn.style.marginLeft = "5px";
//     liElement.appendChild(deleteBtn);
//     deleteBtn.addEventListener("click", () => {
//       liElement.remove();
//     });

//     createValueTask.addEventListener("change", () => {
//       if (createValueTask.checked) {
//         liElement.classList.add("checked");
//       } else {
//         liElement.classList.remove("checked");
//       }
//     });

//     inputTask.value = "";
//   }
// });

// task2
// const openModalBtn = document.querySelector("#openModalBtn");
// const modalWrapper = document.querySelector("#modalWrapper");
// const modalOverlay = document.querySelector(".modal-overlay");
// const modal = document.querySelector(".modal");
// const modalCloseIcon = document.querySelector("#modalCloseIcon");

// openModalBtn.addEventListener("click", () => {
//   modalWrapper.classList.remove("hidden");
// });

// modalCloseIcon.addEventListener("click", () => {
//   modalWrapper.classList.add("hidden");
// });
// modalOverlay.addEventListener("click", () => {
//   modalWrapper.classList.add("hidden");
// });

// task3\

const burgerMenu = document.querySelector(".burgerMenu");
const main = document.querySelector(".main");
const burgerBtn = document.querySelector(".burgerBtn");
const burgerCloseBtn = document.querySelector(".burgerCloseBtn");

burgerBtn.addEventListener("click", () => {
  burgerMenu.style.width = "250px";
  main.style.marginLeft = "250px";
  burgerBtn.style.display = "none";
});

burgerCloseBtn.addEventListener("click", () => {
  burgerMenu.style.width = "0";
  main.style.marginLeft = "0";
  burgerBtn.style.display = "block";
});

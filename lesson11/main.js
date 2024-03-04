//task1

// window.addEventListener("load", () => {
//   init();
// });

// const init = () => {
//   if (localStorage.getItem("src")) {
//     activateImage(localStorage.getItem("src"));
//   } else {
//     activateImage("./image/nature.jpg");
//   }
// };

// const handleImageClick = (src) => {
//   activateImage(src);
//   saveSrc(src);
// };

// const activateImage = (src) => {
//   document.body.style.backgroundImage = `url(${src})`;
//   // 1.
//   const elementsWithSelected = document.getElementsByClassName("selected");
//   if (elementsWithSelected.length > 0) {
//     elementsWithSelected[0].classList.remove("selected");
//   }

//   const element = document.querySelector(`img[src="${src}"]`);
//   element.classList.add("selected");
// };

// const saveSrc = (src) => {
//   localStorage.setItem("src", src);
// };

//task2

const executorInput = document.getElementById("executorInput");
const taskInput = document.getElementById("taskInput");
const statusTask = document.getElementById("statusTask");
const tbody = document.getElementById("tbody");
const createTask = document.getElementById("createTask");

let tasks = JSON.parse(localStorage.getItem("tasks"));
if (tasks == undefined) {
  tasks = [];
}

console.log(tasks);

let btnAnother = ["btn-warning", "btn-primary", "btn-success"];
let indexBtnAnother = 0;
let statuses = ["В ожидании", "Выполняется", "Завершено"];
const handleButtonClick = (id) => {
  tasks = tasks.map((t) => {
    if (t.id == id) {
      if (t.status == "В ожидании") {
        t.status = "Выполняется";
      } else if (t.status == "Выполняется") {
        t.status = "Завершено";
      } else if (t.status == "Завершено") {
        t.status = "В ожидании";
      }
    }

    return t;
  });

  saveTasksToLocal();
  appendTasksToTable();
};
const deleteButtonClick = (index) => {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.id = `${i + 1}`;
  });
  saveTasksToLocal();
  appendTasksToTable();
};

createTask.addEventListener("click", (event) => {
  tasks.push({
    id: `${tasks.length + 1}`,
    executor: `${executorInput.value}`,
    task: `${taskInput.value}`,
    status: "В ожидании",
    delete: "Delete Task",
  });
  saveTasksToLocal();
  appendTasksToTable();
  executorInput.value = "";
  taskInput.value = "";
});

const appendTasksToTable = () => {
  tbody.innerHTML = "";
  const tableRows = tasks.map((task) => {
    const tr = document.createElement("tr");
    const idElement = document.createElement("th");
    idElement.scope = "row";
    idElement.innerText = task.id;
    const executorElement = document.createElement("td");
    executorElement.innerText = task.executor;
    const taskTitleElement = document.createElement("td");
    taskTitleElement.innerText = task.task;
    const statusTaskTd = document.createElement("td");
    const statusTask = document.createElement("button");
    statusTaskTd.append(statusTask);
    statusTask.innerText = task.status;
    if (task.status == null) {
      statusTask.className = "btn-warning";
    }
    if (task.status == "В ожидании") {
      statusTask.className = "btn-warning";
    } else if (task.status == "Выполняется") {
      statusTask.className = "btn-primary";
    } else if (task.status == "Завершено") {
      statusTask.className = "btn-success";
    }
    statusTask.className += " btn";
    statusTask.id = "statusElement";
    statusTask.type = "button";
    statusTask.onclick = () => handleButtonClick(task.id);
    const deleteTaskTd = document.createElement("td");
    const deleteTask = document.createElement("button");
    deleteTaskTd.append(deleteTask);
    deleteTask.className = "btn btn-danger";
    deleteTask.innerText = "Delete Task";
    deleteTask.type = "button";
    deleteTask.onclick = function () {
      let index = Array.from(
        this.parentElement.parentElement.parentElement.children
      ).indexOf(this.parentElement.parentElement);
      deleteButtonClick(index);
    };

    tr.append(
      idElement,
      executorElement,
      taskTitleElement,
      statusTaskTd,
      deleteTaskTd
    );
    return tr;
  });
  tbody.append(...tableRows);
};

window.addEventListener("load", () => {
  appendTasksToTable();
});

const saveTasksToLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

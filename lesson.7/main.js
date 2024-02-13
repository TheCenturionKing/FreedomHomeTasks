git; // //task1
// console.log(navigator);
// console.log(location);

// console.log(
//   `На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.appCodeName} я открыл страничку ${location.origin}`
// );

//task2
// const listElement = document.querySelector("#list");
// const listElementItems = [...listElement.children];

// listElementItems.forEach((value, index) => {
//   value.innerText = index;
//   console.log(value);
// });

// task3;
// const forRemoveElements = document.querySelectorAll(".forRemove");
// console.log(forRemoveElements);
// forRemoveElements.forEach((elements) => {
//   elements.remove();
// });

//task4

// const createText = document.createElement("p");
// createText.innerText = "созданный текст";
// createText.style.cssText = `
// font-size: 36px;
// font-weight: bold;
// `;
// document.body.appendChild(createText);

//task5
// function createTag(tagName, tagColor, content) {
//   const element = document.createElement(tagName);
//   element.style.color = tagColor;
//   element.innerHTML = content;
//   return element;
// }
// element1 = createTag("p", "blue", "by");
// element2 = createTag("p", "red", "Hi");

// document.body.append(element1, element2);

//task6
// const selectYear = document.querySelector("#selectYear");
// for (let i = 1960; i <= 2020; i++) {
//   const option = document.createElement("option");
//   option.value = i;
//   option.textContent = i;
//   selectYear.appendChild(option);
// }

//task7

// const clients = [
//   { name: "Женя", order: true },
//   { name: "Кристина", order: true },
//   { name: "Павел", order: false },
//   { name: "Виолетта", order: false },
//   { name: "Костя", order: true },
// ];

// const liElements = clients.map((client) => {
//   const liElement = document.createElement("li");
//   liElement.innerText = `Клиент ${client.name} ${
//     client.order ? "оплатил/a" : "отменил/a"
//   } заказ`;
//   return liElement;
// });

// const ulElement = document.createElement("ul");
// ulElement.append(...liElements);
// document.body.appendChild(ulElement);
//

//task
// const isSubscribed = true;
// const buttonElement = document.querySelector(".button");
// if (isSubscribed) {
//   buttonElement.innerText = "подписаться";
//   buttonElement.classList.add("subscribed");
// } else {
//   buttonElement.innerText = "отписаться";
//   buttonElement.classList.add("unsubscribed");
// }

// //task 8
// let linksArr = [
//   "https://www.amazon.com/",
//   "https://www.youtube.com/",
//   "https://devby.io/",
//   "https://www.google.com/",
//   "https://apple.com/",
// ];
// const createDiv = document.createElement("div");
// createDiv.style.backgroundColor = "black";
// createDiv.style.padding = "20px";

// linksArr.forEach((links) => {
//   const aCreateLink = document.createElement("a");
//   aCreateLink.href = links;
//   aCreateLink.setAttribute("target", "_blank");
//   aCreateLink.style.textDecoration = "none";
//   aCreateLink.textContent = "link";
//   createDiv.appendChild(aCreateLink);
// });
// document.body.appendChild(createDiv);

// task 9

// const users = [
//   { name: "Mark", age: 12 },
//   { name: "Olga", age: 30 },
//   { name: "Tom", age: 25 },
//   { name: "Den", age: 43 },
// ];

// const createTable = document.createElement("table");

// const newTable = users.map((users) => {
//   const getTr = document.createElement("tr");
//   const nameTd = document.createElement("td");
//   nameTd.textContent = users.name;
//   nameTd.style.color = "red";

//   const ageTd = document.createElement("tr");
//   ageTd.textContent = users.age;
//   ageTd.style.color = "blue";

//   getTr.append(nameTd);
//   getTr.append(ageTd);
//   createTable.append(getTr);
// });
// document.body.append(createTable);

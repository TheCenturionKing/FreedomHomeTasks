// task1
// function sum1(num1, num2) {
//   if (num1 === undefined) {
//     return "Введите первый параметра";
//   } else if (num2 === undefined) {
//     return "Введите второй параметр";
//   }

//   if (typeof num1 !== "number") {
//     return "Введенный первый параметр не является числом";
//   } else if (typeof num2 !== "number") {
//     return "Введенный второй параметр не является числом";
//   }
//   return num1 + num2;
// }
// console.log(sum1(1, 4));

//task2
// function square(
//   a = console.error('Функция "square" не может быть вызвана без аргумента')
// ) {
//   console.log(a * a);
// }
// square(10);
// square();

//task 3
// generateRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + min);
// };
// let resultRandomNumber = generateRandomNumber(0, 10);

// gueesNumber = (someNum) => {
//   if (someNum >= 0 && someNum <= 10) {
//     if (someNum == resultRandomNumber) {
//       return console.log("Вы выйграли");
//     } else {
//       return console.log(
//         `Вы не угадали, ваше число -  ${someNum},  а выпало число ${resultRandomNumber}`
//       );
//     }
//   } else {
//     console.log("Задайте число от 0 до 10 включительно");
//   }
// };
// gueesNumber(10);

//task4

// const arr = ["Hulk", "Iron Man", "Captain America", "Tor", "Wolverine"];
// copyArr = (arr) => {
//   return arr.map((element) => console.log(element));
// };
// console.log(arr);
// copyArr(arr);

//task 5
// const names = ["Frank", "Tom", "Derek", "Elizabet"];
// const helloNames = [];

// names.forEach((element) => helloNames.push("Hello, " + element));
// console.log(helloNames);

//task 6
// const usersInfo = [
//   { name: "Palmar", age: 27, email: "palmar@mail.ru" },
//   { name: "John", age: 20, email: "john@mail.ru" },
//   { name: "Marty", age: 25, email: "marty@mail.ru" },
// ];
// usersName = (usersInfo) => {
//   return usersInfo.map((element) => element.name);
// };
// const onlyNames = usersName(usersInfo);
// console.log(onlyNames);

//task 7
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: "string",
//   d: 12,
// };

// function sumObject(object) {
//   let sum = 0;
//   for (const key in object) {
//     if (typeof object[key] === "number") {
//       sum += object[key];
//     }
//   }
//   return sum;
// }
// const result = sumObject(objectWithNumbers);
// console.log(result);

// const helloText = "Привет, добро пожаловать на урок"
// console.log(helloText.length);

// const helloTextSplitted = helloText.split (" ")
// console.log(helloTextSplitted[helloTextSplitted.length - 1]);

// console.log(helloTextSplitted);

//task 8
// const usFirst = (str) => {
//    const firstLetter = str[0]
//    const firstLetterUpperCase = firstLetter.toUpperCase
//    const stringSlice  = str.slice(1)
//    const result = firstLetterUpperCase + stringSlice
// }
// const ucFirst = (str) => str[0].toUpperCase + str.slice[1]

// ucFirst('привет')

//task9
// function checkSpam(str) {
//   const strLowerCase = str.toLowerCase();
//   return strLowerCase.includes("badword") || strLowerCase.includes("xxx");
// }
// console.log(sheckSpam("BADworD"));

//task10
// let str = "привет, Женя";
// let str1 = "";
// const reverseString = () => {
//   for (let i = str.length - 1; i >= 0; i--) {
//     str1 = str1 + str[i];
//   }
//   return str1;
// };

// console.log(reverseString(str1));

// const revStr = str => str.split('').reverse().join('')

// //task11
// const stations = [
//   "MAN675847583748sjt567654;Manchester Piccadilly",

//   "GNF576746573fhdg4737dh4;Greenfield",

//   "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",

//   "SYB4f65hf75f736463;Stalybridge",

//   "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
// ];

// for (const station of stations) {
//   const code = station.slice(0, 3);
//   const stationName = station.split(";")[1];

//   console.log(`${code}: ${stationName}`);
// }

//task 12

// const strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];

// function unique(arr) {
//   return arr.filter(
//     (value, index, elements) => elements.indexOf(value) === index
//   );
// }
// console.log(unique(strings));

//task 13
// janeData1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
// juliaData1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
// janeData2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
// juliaData2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];
// function verifyCats(catsJane, catsJulia) {
//   let result = catsJane.slice(1, -1).concat(catsJulia);
//   result.forEach((element, index) => {
//     if (element >= 2) {
//       if (element >= 5) {
//         console.log(`Кошка номер ${index + 1} взрослая, и ей ${element} лет`);
//       } else {
//         console.log(`Кошка номер ${index + 1} взрослая, и ей ${element} года`);
//       }
//     } else {
//       console.log(`Кошка номер ${index + 1} еще котенок`);
//     }
//   });
//   return result;
// }
// console.log(verifyCats(janeData1, juliaData1));

//task-14
//14.1
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// function filterByNumbersLength(arr) {
//   const filteredArr = arr.filter((element, index) =>
//     console.log(`Индексу ${index} соответствует число ${element}`)
//   );
//   return filteredArr;
// }
// console.log(filterByNumbersLength(numbers));

//14.2
// let arr = [5, 4, 3, 8, 0];
// function filterFor(arr, a) {
//   const newArr = arr.filter((element) => {
//     if (element >= a) {
//       return true;
//     }
//   });
//   return newArr;
// }
// console.log(filterFor(arr, 5));

//task-15
// function filterArrayByStringLength(arr) {
//   const filteredArr = arr.filter((element) => {
//     if (element.length <= 3) {
//       return element;
//     }
//   });
//   return filteredArr;
// }

// console.log(
//   filterArrayByStringLength(["yes", "hello", "no", "easycode", "what"])
// );

//task 16
// const arr = [[14, 45], [1], ["a", "c", "d"]];
// const sortedLengthArr = arr.sort((a, b) => a.length - b.length);
// console.log(sortedLengthArr);

//task 17.1
catAge1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
catAge2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

function getAverageHumanAge(catAges) {
  const humanAgeOfCat = catAges.map((ageCat) =>
    ageCat <= 2 ? ageCat * 10 : ageCat * 7
  );

  const exclusionOfJuniors = humanAgeOfCat.filter((age) => age >= 18);

  const averageAge = exclusionOfJuniors.reduce((acc, item) => acc + item, 0);
  let result = averageAge / exclusionOfJuniors.length;
  return result;
}

console.log(getAverageHumanAge(catAge1));
//task 17.2

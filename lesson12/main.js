// task1

// const users = ["David", "Tom", "Julia", "Edward", "Keila"];
// const [a, b, ...c] = users;
// console.log(a);
// console.log(b);
// c.forEach((user) => {
//   console.log(user);
// });

//task2
// const users = ["David", "Tom", "Julia", "Edward", "Keila"];

// const checkUsers = (firstName, secondName, thirdName) => {
//   console.log(firstName, secondName, thirdName);
// };
// checkUsers(...users);

//task3
// const objects = {
//   name: "asd",
//   userName: "asde",
//   age: "asd",
//   level: "4",
// };

// const level = objects.level !== undefined ? objects.level : 1;

// const userName = objects.userName !== undefined ? objects.userName : 2;

// const fields = {};
// for (let key in objects) {
//   if (key !== "level" && key !== "userName") {
//     fields[key] = objects;
//   }
// }
// console.log("level:", level);
// console.log("userName:", userName);
// console.log("fields", fields);

//task4
function meanScore(...args) {
  if (args.some((arg) => typeof arg !== "number")) {
    console.error("Все аргументы в вызове функции должны быть числами!");
    return;
  }
  const mergeArr = [...args];
  const sum = mergeArr.reduce((acc, curValue) => {
    return acc + curValue;
  }, 0);
  const average = sum / mergeArr.length;
  return parseFloat(average.toFixed(2));
}

console.log(meanScore(4, 5, 10, 15, 45, 168, 290));

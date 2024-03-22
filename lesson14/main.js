//task1
// function sayMessage(message) {
//   console.log(`сообщение номер ${message}`);
// }

// function sayMessages() {
//   for (let i = 1; i <= 5; i++) {
//     (function (index) {
//       setTimeout(() => {
//         sayMessage(index);
//       }, i * 2000);
//     })(i);
//   }
// }
// sayMessages();

//task2
// let hrs = document.getElementById("hrs");
// let min = document.getElementById("min");
// let sec = document.getElementById("sec");

// setInterval(() => {
//   let currentTime = new Date();
//   hrs.innerHTML =
//     (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//   min.innerHTML =
//     (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
//   sec.innerHTML =
//     (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
// }, 1000);

//task3
// const titleElement = document.getElementById("titleElement");
// const request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
// request.send();
// request.onload = () => {
//   const data = JSON.parse(request.response);
//   titleElement.innerText = data.title;
// };

//TASK4
// const listElement = document.getElementById("listElement");
// const request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/todos");
// request.send();
// request.onload = () => {
//   const data = JSON.parse(request.response).slice(0, 20);
//   data.forEach((element) => {
//     const liElement = document.createElement("li");
//     liElement.textContent = element.title;
//     listElement.appendChild(liElement);
//   });
// };

//task5

/**
 * 1) вызвать апи
 * 2) вывести ответ апи в консоль
 */

async function getWeatherInfo() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=Astana&appid=a94d0a5ac08570add4b47b8da933f247&units=metric"
  );
  const data = await response.json();
  return data;
}
function getTimeByTimezone(timezone) {
  const date = new Date();
  const utcTime = date.getTime();
  const localOffset = date.getTimezoneOffset() * 60000;
  const targetTime = utcTime + timezone * 1000 + localOffset;
  const hours = new Date(targetTime).getHours();
  const minutes = new Date(targetTime).getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${hours}:${minutes}`;
}
function renderMain(data) {
  const current = document.getElementById("current");
  const cityName = document.getElementById("cityName");
  const cityTime = document.getElementById("cityTime");
  const weather = document.getElementById("weather");
  const temperature = document.getElementById("temperature");
  const imgWeather = document.getElementById("imgWeather");
  const speedMs = document.getElementById("speedMs");
  cityTime.innerHTML = getTimeByTimezone(data.city.timezone);
  cityName.innerText = data.city.name;
  weather.textContent = data.list[0].weather[0].main;
  const icon = data.list[0].weather[0].icon;
  imgWeather.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  temperature.innerHTML = `${Math.round(data.list[0].main.temp)}&#8451`;
  speedMs.innerHTML = `${data.list[0].wind.speed} m/s`;
}
function renderForecastList(list) {
  const forecastContainer = document.getElementById("forecast_container");
  list.forEach((element, index) => {
    if ((index + 1) % 8 != 0) {
      return;
    }
    const days = document.createElement("div");
    days.className = "day";
    const date = element.dt_txt;
    const weatherImg = element.weather[0].icon;
    const temp = element.main.temp;

    const splitted = date.split(" ");
    days.innerHTML = `
          <div style="display: flex; flex-direction: column">
            <p>${splitted[0]}</p>
            <p>${splitted[1]}</p>
          </div>
          <div><img src='https://openweathermap.org/img/wn/${weatherImg}@2x.png' alt="" style = 'width : 50px'></div>
          <div>
            <p>${Math.round(temp)}</p>
          </div>
    `;
    forecastContainer.append(days);
  });
}

async function init() {
  const weatherData = await getWeatherInfo();
  renderMain(weatherData);
  renderForecastList(weatherData.list);
}

init();

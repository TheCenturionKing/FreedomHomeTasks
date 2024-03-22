async function getCountryInfo() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  return data;
}
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + " млн";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(2) + " тыс";
  }
  return num.toString();
}

function formatCurrency(currencies) {
  if (currencies == null) {
    return "";
  }
  console.log(currencies);
  console.log(Object.keys(currencies));

  const data = currencies[Object.keys(currencies)[0]];
  const name = data.name;
  const symbol = data.symbol;

  return `${symbol} ${name}`;
}

function appendCountryInfo(country) {
  const countrys = document.getElementById("countrys");
  countrys.innerHTML += `<div class="col">
    <div class="card h-100">
      <img src="${
        country.flags.png
      }" class="card-img-top" alt="..." width = '200px' height = '200px'>
      <div class="card-body">
        <h5 class="card-title">${country.name.official}</h5>
        <p class="card-text">${country.region} </p>
        <p class="card-text">&#128107 ${formatNumber(country.population)} </p>
        <p class="card-text">&#128483 ${Object.values(country.languages)} </p>
        <p class="card-text">&#128176; ${formatCurrency(country.currencies)}</p>
      </div>
    </div>
  </div>`;
}

async function init() {
  const countrys = await getCountryInfo();
  console.log("countrys", countrys);
  for (let i = 9; i < countrys.length; i += 10) {
    console.log("i = ", i);
    appendCountryInfo(countrys[i]);
  }
}

init();

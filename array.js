const req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  const obj = JSON.parse(this.response);
  for (let i = 0; i < obj.length; i++) {
    const name = obj[i].name.common;
    const population = obj[i].population;
    const continents = obj[i].continents;
    const flags = obj[i].flags.png;
    const currencies = obj[i].currencies;
    const capital = obj[i].capital;
    // console.log(capital);
    // console.log(currencies);
    // console.log(obj[i]);
  }

  // 1.all the countries with a population less than 2lakhs
  //   const lessPopulation = obj.filter(function (value) {
  //     return value.population < 200000;
  //   });
  //   console.log(lessPopulation);
  //   const mapResult = obj.map(function (value) {
  //     console.log(value.name.common);
  //   });
  //   console.log(mapResult);
  // };

  //   2.all the countries from asia continents
  const asiaContinents = obj.filter(function (value) {
    return value.continents === "asia";
  });
  console.log(asiaContinents);
  const mapResult = obj.map(function (value) {
    console.log(value.name.common);
  });
  console.log(mapResult);
};

// 3.total population of country using reduce function
//   const totalPopulation = obj.reduce((a, b) => {
//     return a + b.population;
//   }, 0);
//   console.log("total population is", totalPopulation);

// 4.USD CURRENCIES IN ALL COUNTRY

// obj.filter(function (countries) {
//   if (countries.currencies?.USD) {
//     console.log("country name:", countries.name.common);
//   }
// });

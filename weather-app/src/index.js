import './css/reset.css';
import './css/style.css';

import * as Weather from './js/weather';
import * as DomManip from './js/domManip';

let city = 'Delhi India';
let weatherPromise = Weather.weatherByCity(city);
showWeather();

const input = document.querySelector('#search');
input.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    drive();
  }
});

const searchBtn = document.querySelector('.searchBtn');
searchBtn.addEventListener('click', drive);

/**
 * Listens to input and search button and calls showWeather accordinaly
 */
function drive() {
  const trimmedCityName = input.value.trim();
  if (!trimmedCityName) {
    setTimeout(() => {
      alert('City Name is required');
    }, 0);
  } else {
    city = trimmedCityName;
    weatherPromise = Weather.weatherByCity(city);
    showWeather();
  }
}

/**
 * Show the weather of the current city
 */
function showWeather() {
  weatherPromise.then(
    (data) => {
      if (data.error) {
        alert(data.error.message);
      } else {
        DomManip.showCurrentWeather(data);
      }
    },
    function (err) {
      console.error(err);
      alert(err.message);
    }
  );
}

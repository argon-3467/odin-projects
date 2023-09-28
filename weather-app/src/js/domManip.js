import * as Helper from './helper';

const main = document.querySelector('.main');

/**
 * Shows current weather on the page
 * @param {Object} data Current weather object
 */
export function showCurrentWeather(data) {
  // console.log(data);
  main.innerHTML = '';
  addLocationToMain(data);
  addCurrentToMain(data);
  addForecastToMain(data);
}

/**
 * Add Location section to main
 * @param {Object} data Current weather object
 */
function addLocationToMain(data) {
  const header = Helper.createHtmlElement(
    'h2',
    null,
    ['location-city'],
    `${data.location.name}, ${data.location.country}`,
    null
  );
  const location = Helper.createHtmlElement(
    'p',
    null,
    ['location-cords'],
    `${data.location.lat}°N  ${data.location.lon}°E`,
    null
  );
  main.appendChild(
    Helper.createHtmlElement('section', null, ['location'], null, [
      header,
      location,
    ])
  );
}

/**
 * Add Weather section to main
 * @param {Object} data Current weather object
 */
function addCurrentToMain(data) {
  const header = Helper.createHtmlElement(
    'h2',
    null,
    ['current-header'],
    'Current',
    null
  );
  // const current = epochToCustomFormat(data.location.localtime_epoch);
  const lastUpdated = epochToCustomFormat(data.current.last_updated_epoch);
  const p = Helper.createHtmlElement(
    'p',
    null,
    ['current-time'],
    `Last Updated: ${lastUpdated.date} | ${lastUpdated.time}`,
    null
  );
  const png = Helper.createImgElement(
    data.current.condition.icon,
    data.current.condition.text,
    ['condtition-image'],
    null
  );
  const current = Helper.createHtmlElement(
    'div',
    null,
    ['current-details'],
    null,
    [
      createDiv(data.current.condition.text, null, ['condition'], [png]),
      createDiv('temprature', `${data.current.temp_c}°C`, ['temp'], null),
      createDiv('humidity', `${data.current.humidity} %`, ['humidity'], null),
      createDiv(
        'wind',
        `${data.current.wind_kph}Km/h ${data.current.wind_dir}`,
        ['wind'],
        null
      ),
      createDiv(
        'feels Like',
        `${data.current.feelslike_c}°C`,
        ['feelslike'],
        null
      ),
      createDiv(
        'visibility',
        `${data.current.vis_km} Km`,
        ['visibility'],
        null
      ),
    ]
  );

  main.appendChild(
    Helper.createHtmlElement('section', null, ['weather'], null, [
      header,
      p,
      current,
    ])
  );
}
/**
 * Add details section to main
 * @param {Object} data Current weather object
 */
function addForecastToMain(data) {
  const header = Helper.createHtmlElement(
    'h2',
    null,
    ['forcast-header'],
    'Forecast',
    null
  );
  const current = epochToCustomFormat(data.location.localtime_epoch);
  const p = Helper.createHtmlElement(
    'p',
    null,
    ['forcast-time'],
    `Date: ${current.date}`,
    null
  );
  const forecastDay = data.forecast.forecastday[0];
  const png = Helper.createImgElement(
    forecastDay.day.condition.icon,
    forecastDay.day.condition.text,
    ['condtition-image'],
    null
  );
  const forecast = Helper.createHtmlElement(
    'div',
    null,
    ['forecast-details'],
    null,
    [
      createDiv(
        `${forecastDay.day.condition.text}`,
        null,
        ['condition'],
        [png]
      ),
      createDiv(
        'Max Temp',
        `${forecastDay.day.maxtemp_c}°C`,
        ['maxtemp'],
        null
      ),
      createDiv(
        'Min Temp',
        `${forecastDay.day.mintemp_c}°C`,
        ['mintemp'],
        null
      ),
      createDiv('Sunrise', `${forecastDay.astro.sunrise}`, ['sunrise'], null),
      createDiv(
        'Rain Chances',
        `${forecastDay.day.daily_chance_of_rain} %`,
        ['rain'],
        null
      ),
      createDiv('Sunset', `${forecastDay.astro.sunset}`, ['sunset'], null),
    ]
  );

  main.appendChild(
    Helper.createHtmlElement('section', null, ['forecast'], null, [
      header,
      p,
      forecast,
    ])
  );
}

/**
 * @param {string} title Title of the div
 * @param {string} value Text value of the div
 * @param {Array} divClassArr Classes array for the div
 * @param {Array} divElementsArr Elements to be appended to the div
 * @return {HTMLDivElement} The required div Element
 */
function createDiv(title, value, divClassArr, divElementsArr) {
  const titleClass = divClassArr[0];
  const titlePara = Helper.createHtmlElement(
    'p',
    null,
    [`${titleClass}-title`],
    title.charAt(0).toUpperCase() + title.slice(1),
    null
  );
  const valuePara = Helper.createHtmlElement(
    'p',
    null,
    [`${titleClass}-value`],
    value,
    null
  );
  let elementsArr = [titlePara, valuePara];
  if (divElementsArr) {
    elementsArr = elementsArr.concat(divElementsArr);
  }
  return Helper.createHtmlElement('div', null, divClassArr, null, elementsArr);
}

/**
 *
 * @param {number} epoch Time elapsed since epoch
 * @return {Object} something like {formattedWednesday 27 September 2023, 11:10}
 */
function epochToCustomFormat(epoch) {
  // Create a new Date object with the provided epoch timestamp
  const dateObj = new Date(epoch * 1000); // Multiply by 1000 to convert from seconds to milliseconds

  // Define an array of month names
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Define an array of weekday names
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // Get the day, month, year, hours, and minutes from the Date object
  const weekday = weekdays[dateObj.getDay()];
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  // Create a string in the desired format
  const date = `${weekday} ${day} ${month} ${year}`;
  const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

  return { date, time };
}

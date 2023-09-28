const API_BASE_URL = 'http://api.weatherapi.com/v1';
const key = '66cc3f8096f940309f1100251232609';
const keyParameter = 'key=' + key;

/**
 * Search current weather of a given city
 * @param {string} cityName Name of the city whose weather is to be searched
 * @return {Promise} data or undefined
 */
export async function weatherByCity(cityName) {
  const apiMethod = '/forecast.json';
  const response = await fetch(
    API_BASE_URL + apiMethod + '?' + keyParameter + '&q=' + cityName
  );

  if (!response.ok) {
    console.error(
      `Server returned: ${response.status} (${response.statusText})`
    );
  }

  const dataObj = await response.json();
  return dataObj;
}

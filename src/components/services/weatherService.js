const API_KEY = '6574f405463f1e3a64b32c567ddd4bc8';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + '/' + infoType);// eslint-disable-line prefer-template
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  console.log(url);
  return fetch(url).then((response) => response.json()).then((data) => data);
};

export default getWeatherData;

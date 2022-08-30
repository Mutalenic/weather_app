import { data } from "autoprefixer";

const API_KEY = '6574f405463f1e3a64b32c567ddd4bc8';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + '/' + infoType);// eslint-disable-line prefer-template
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((response) => response.json())
};

const formatCurrentWeatherData = (data) => {
  const {
    coord: {lat, lon},
    main: {temp, feels_like, temp_min, temp_max, humidity},
    name,
    dt,
    sys: {country, sunrise, sunset},
    weather,
    wind: {speed}
  } = data

  return {lat, lon, temp, humidity, weather, speed, name, dt, country, sunrise, sunset,temp_min, temp_max, feels_like}
}
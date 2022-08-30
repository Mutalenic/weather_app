// import { data } from "autoprefixer";

const API_KEY = '6574f405463f1e3a64b32c567ddd4bc8';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + '/' + infoType); // eslint-disable-line prefer-template
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((response) => response.json());
};

const formatCurrentWeatherData = (data) => {
  const {
    coord: { lat, lon },
    main: {
      /* eslint-disable camelcase */
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
    },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    humidity,
    details,
    icon,
    speed,
    name,
    dt,
    country,
    sunrise,
    sunset,
    temp_min,
    temp_max,
    feels_like,
  };
};

const getFormattedWeatherData = async (searchParams) => {
  const currentWeatherData = await getWeatherData(
    'weather',
    searchParams,
  ).then(formatCurrentWeatherData);
  return currentWeatherData;
};

export default getFormattedWeatherData;

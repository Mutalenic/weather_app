import React from 'react';
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons';
import sun from '../assets/sun.svg';

function WeatherParameters() {
  return (
    <div>
      <div className="flex items-center justify-center my-6 text-3xl text-[rgb(150,255,2)] font-semibold">
        <p>Windy</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={sun} alt="sun" className="w-1/12" />
        <p className="flex flex-col space-y-2">25°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">30°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">70%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind Speed
            <span className="font-medium ml-1">10 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise:
          <span className="font-medium mr-1">05:00 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className="font-light">
          Set:
          <span className="font-medium mr-1">06:00 PM</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowUp />
        <p className="font-light">
          High:
          <span className="font-medium mr-1">38°</span>
        </p>
        <p className="font-light">|</p>
        <UilArrowDown />
        <p className="font-light">
          Low:
          <span className="font-medium mr-1">20°</span>
        </p>
      </div>
    </div>
  );
}

export default WeatherParameters;

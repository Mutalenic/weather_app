import React from 'react';
import sun from '../assets/sun.svg';
import {
  UiArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons';
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
            <UilTemperature size={18} className="mr-1"/>
            Real feel:
            <span className="font-medium ml-1">30°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1"/>
            Humidity:
            <span className="font-medium ml-1">70%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1"/>
            Wind Speed
            <span className="font-medium ml-1">10 km/h</span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default WeatherParameters;

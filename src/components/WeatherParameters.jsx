import React from 'react';
import sun from '../assets/sun.svg';

function WeatherParameters() {
  return (
    <div>
      <div className="flex items-center justify-center my-6 text-3xl text-[rgb(150,255,2)] font-semibold">
        <p>Windy</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={sun} alt="sun" className="w-1/12" />
      </div>
    </div>
  );
}

export default WeatherParameters;

import React from 'react';
import sun from '../assets/sun.svg';

function Forecast() {
  return (
    <div>
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium uppercase">Hourly ForeCast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">05:00PM</p>
          <img src={sun} alt="sun" className="w-1/12" />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">05:00PM</p>
          <img src={sun} alt="sun" className="w-1/12" />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">05:00PM</p>
          <img src={sun} alt="sun" className="w-1/12" />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">05:00PM</p>
          <img src={sun} alt="sun" className="w-1/12" />
          <p className="font-medium">22°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">05:00PM</p>
          <img src={sun} alt="sun" className="w-1/12" />
          <p className="font-medium">22°</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;

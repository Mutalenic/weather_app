import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function CityInput() {
  return (
    <div className="flex flex-row justify-center items-center my-6">
      <div className="flex flex-row justify-center items-center my-6">
        <input
          type="text"
          placeholder="Search For City..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={27}
          className="text-white cursor-pointer transition ease-out hover:scale-150 ml-2"
        />
        <UilLocationPoint
          size={27}
          className="text-white cursor-pointer transition ease-out hover:scale-150"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light"
          type="button"
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          type="button"
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:125"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default CityInput;

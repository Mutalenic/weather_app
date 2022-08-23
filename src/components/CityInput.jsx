import React from 'react';
// import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function CityInput() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row justify-center my-6">
        <input type="text" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize" />
      </div>
    </div>
  );
}

export default CityInput;

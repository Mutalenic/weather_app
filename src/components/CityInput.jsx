import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function CityInput() {
  return (
    <div className="flex flex-row justify-center items-center my-6">
      <div className="flex flex-row justify-center items-center my-6">
        <input type="text" placeholder="Search For City..." className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" />
        <UilSearch size={27} className="text-white cursor-pointer transition ease-out hover:scale-150 ml-2" />
        <UilLocationPoint size={27} className="text-white cursor-pointer transition ease-out hover:scale-150" />
      </div>
    </div>
  );
}

export default CityInput;

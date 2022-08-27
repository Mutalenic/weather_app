import React from 'react';

function Cities() {
  const places = [
    {
      id: 1,
      title: 'Lusaka',
    },
    {
      id: 2,
      title: 'Nairobi',
    },
    {
      id: 3,
      title: 'Sydney',
    },
    {
      id: 4,
      title: 'New York',
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {places.map((place) => (
        <button key={place.id} type="button">{place.title}</button>
      ))}
    </div>
  );
}

export default Cities;

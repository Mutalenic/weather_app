import Cities from './components/Cities';
import CityInput from './components/CityInput';
import DateTimeLocation from './components/DateTimeLocation';
import WeatherParameters from './components/WeatherParameters';
// import UilReact from '@iconscout/react-unicons/icons/uil-react';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-[#9F90CF] h-fit shadow-xl shadow-gray-400">
      <Cities />
      <CityInput />

      <DateTimeLocation />
      <WeatherParameters />
    </div>

  );
}

export default App;

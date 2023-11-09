import React, { useState } from 'react';
import sun from '../assets/sun.svg';
import Day from '../components/Day';

function Weather({ weatherData }) {
  const [selectedDay, setSelectedDay] = useState(0);
  
  const selectedDayInfo = weatherData && weatherData.forecast?.forecastday[selectedDay]?.day;
  const weatherIconCode = selectedDayInfo?.condition.code;

  

  return (
    <div className="App">
      <div className="row">
        <div className="col s12 m6 push-m3">
          <div className="weather card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{weatherData?.location?.name}</span>
              <p><img src={sun} alt="Sun" /></p>
              <span className="temperature">{selectedDayInfo?.maxtemp_c}</span>
              <div className="wind">{selectedDayInfo?.maxwind_kph}km/h ({selectedDayInfo?.wind_degree}°)</div>
            </div>
            <div className='card-action'>
              
            <Day setSelectedDay={setSelectedDay} selectedDay={selectedDay} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;

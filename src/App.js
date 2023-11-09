import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import TemperatureChart from './components/TemperatureChart';

import './App.css';
import Day from './components/Day';
import Search from './components/Search';

function App() {
  
  const [weatherData, setWeatherData] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0); 

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const cleAPI = process.env.REACT_APP_CLE_API;
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${cleAPI}&q=lyon&days=3&aqi=no&alerts=no`;
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error('Réponse du réseau incorrecte');
      }
      let data = await response.json();

      setWeatherData(data); 
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  }
  function getFutureDates() {
    const today = new Date();
    const futureDates = [];
    

    

   /* for (let i = 1; i <= 3; i++) {
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + i);
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = nextDay.toLocaleDateString(undefined, options);
      futureDates.push(formattedDate);
    }*/
    
    return futureDates;
  }

  function handleClickDay(event){
   
    document.querySelector('.clickedDay').classList.remove('clickedDay');
    event.target.classList.add('clickedDay')
  };

  const selectedWeather = weatherData[selectedDay] || {};
  const temperatures = [15, 16, 17, 18, 19, 20, 21];
  return (
    <>
      <Header />
      <Search setWeatherData={setWeatherData} />
      <Weather weatherData={weatherData} />
      <Day weatherData={weatherData} setSelectedDay={setSelectedDay} selectedDay={selectedDay} />
      <TemperatureChart temperatures={temperatures} />
    </>
  );
};


export default App

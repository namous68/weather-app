import React, { useState } from 'react';
import search_icon from '../assets/search.png';


const Search = ({ setWeatherData }) => {
  const [city, setCity] = useState('');

  

  const handleSearch = async () => {
    
    if (city === '') {
      alert('Veuillez saisir une ville.');
      return;
    }

    try {
      const cleAPI = process.env.REACT_APP_CLE_API;
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${cleAPI}&q=${city}&days=3&aqi=no&alerts=no`;

      const response = await fetch(url);
      if (!response.ok) {
        alert('Veuillez saisir une ville Valide \uD83D\uDE04 ');
      }

      const data = await response.json();
     
      setWeatherData(data); 
    } catch (error) {
      console.error('Erreur lors de la recherche :', error);
    }
  };

  return (
    <div className="top-bar">
      <input
        type="text"
        className="cityInput"
        placeholder="Entre le Nom de La Ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div className="search_icon" onClick={handleSearch}>
        <img src={search_icon} alt="search" />
      </div>
    </div>
  );
};

export default Search;

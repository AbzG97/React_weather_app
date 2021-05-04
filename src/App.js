import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import WeatherCards from './components/WeatherCards';
import './style.css';

function App() {
  // const [geoLocation, setGeoLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGeoLaction = () => {
      if (navigator.geolocation) {
        setLoading(true);
        navigator.geolocation.getCurrentPosition((position) => {
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=current,hourly,minutely&appid=f31b16e02759ee3f65282a508fd057c7&units=metric`)
            .then((response) => setWeatherData(response.data));
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f31b16e02759ee3f65282a508fd057c7`)
            .then((response) => setLocationData(response.data));
            setLoading(false);
          });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
   
    getGeoLaction();
    
  }, [])
  return (
    <div className="app">
      {!loading ? weatherData && <WeatherCards weatherData={weatherData} locationData={locationData}/> : <h1>Loading</h1>}
    </div>

  );
}

export default App;

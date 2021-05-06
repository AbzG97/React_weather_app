import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import DetailedView from './components/DetailedView';
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage';


function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [address, setAddress] = useState("");

  // save detailed data for daily weather page upon refresh using localStorage
  const retreive = localStorage.getItem("daily");
  const parsed = JSON.parse(retreive);
  const [detailed, setDetailed] = useState(parsed || {});

  useEffect(() => {
    const getGeoLaction = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=current,hourly,minutely&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then((response) => setWeatherData(response.data));
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_API_KEY}`)
            .then((response) => setLocationData(response.data));
          });
        }
      }
      getGeoLaction();
    }, []);

  
  return (
    <div className="app">
        <Switch>
          <Route path="/" exact>
            <HomePage weatherData={weatherData} setWeatherData={setWeatherData} setLocationData={setLocationData} locationData={locationData}
            address={address} setAddress={setAddress} setDetailed={setDetailed}/>
          </Route>
          <Route path="/details">
              <DetailedView detailed={detailed}/>
          </Route>
        </Switch>
    </div>
    
  );
}

export default App;

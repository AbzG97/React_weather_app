import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import WeatherCards from './components/WeatherCards';
import './style.css';

function App() {
  // const [geoLocation, setGeoLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const getGeoLaction = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=current,hourly,minutely&appid=f31b16e02759ee3f65282a508fd057c7&units=metric`)
            .then((response) => setWeatherData(response.data));
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f31b16e02759ee3f65282a508fd057c7`)
            .then((response) => setLocationData(response.data));
          });
        }
      }
      getGeoLaction();
    }, []);

  const GetLocalWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=current,hourly,minutely&appid=f31b16e02759ee3f65282a508fd057c7&units=metric`)
          .then((response) => setWeatherData(response.data));
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f31b16e02759ee3f65282a508fd057c7`)
          .then((response) => setLocationData(response.data));
        });
      }
  }

  const FormSubmitHandler = async (e) => {
    e.preventDefault();
    const location = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=f31b16e02759ee3f65282a508fd057c7`);
    setLocationData(location.data);
    const weather = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.data.coord.lat}&lon=${location.data.coord.lon}&exclude=current,hourly,minutely&appid=f31b16e02759ee3f65282a508fd057c7&units=metric`);
    setWeatherData(weather.data);
    
    
  
  } 
  return (
    <div className="app">
      <StyledForm>
        <p className="title">React Weather App</p>
        <form onSubmit={FormSubmitHandler}>
          <input className="textInput" placeholder="Enter a city, country name" onChange={(e) => setAddress(e.target.value)}/>
          {/* <br></br> */}
          <input className="submitBtn" type="submit" value="search"/>
        </form>
        <button onClick={GetLocalWeather}>Get local weather</button>
      </StyledForm>
      {weatherData && locationData && <WeatherCards weatherData={weatherData}  locationData={locationData}/>}
    </div>
  );
}

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  .title {
    font-size: 3rem;
    letter-spacing: 5px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .textInput {
      color: white;
      border-radius: 50px;
      outline: none;
      border: 2px limegreen solid;
      width: 100%;
      background-color: transparent;
    }
    .submitBtn {
      color: white;
      letter-spacing: 3px;
      border-radius: 50px;
      outline: none;
      border: 2px limegreen solid;
      background-color: transparent;
      cursor: pointer;
      transition: all 0.25s ease-in-out;
      &:hover {
        color: black;
        background-color: limegreen;
      }

    }
    input {
      margin: .5rem;
      padding: .85rem;
      font-family: 'Cairo', sans-serif;
      
    }
  }
  button {
    color: white;
    margin: .5rem;
    padding: .85rem;
    letter-spacing: 3px;
    border-radius: 50px;
    outline: none;
    border: 2px limegreen solid;
    background-color: transparent;
    cursor: pointer;
    font-family: 'Cairo', sans-serif;
    transition: all 0.25s ease-in-out;
    &:hover {
      color: black;
      background-color: limegreen;

    }
  }
    
`

export default App;

import React from 'react'
import styled from 'styled-components'
import axios from 'axios';
import WeatherCards from './WeatherCards';

function HomePage({weatherData, setWeatherData, setLocationData, locationData, address, setAddress, setDetailed}) {

    const GetLocalWeather = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
              axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=current,hourly,minutely&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
              .then((response) => setWeatherData(response.data));
              axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_API_KEY}`)
              .then((response) => setLocationData(response.data));
            });
          }
      }
    
      const FormSubmitHandler = async (e) => {
        e.preventDefault();
        const location = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${process.env.REACT_APP_API_KEY}`);
        setLocationData(location.data);
        const weather = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.data.coord.lat}&lon=${location.data.coord.lon}&exclude=current,hourly,minutely&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
        setWeatherData(weather.data);
        setAddress('');
        
        
      
      } 
    return (
        <div>
            <p className="title">React Weather App</p>
            <StyledForm>
            <form onSubmit={FormSubmitHandler}>
                <input className="textInput" placeholder="Enter a city, country name" onChange={(e) => setAddress(e.target.value)} value={address}/>
                {/* <br></br> */}
                <input className="submitBtn" type="submit" value="search"/>
            </form>
            <button onClick={GetLocalWeather}>Get local weather</button>
        </StyledForm>
        {weatherData && locationData && <WeatherCards weatherData={weatherData}  locationData={locationData} setDetailed={setDetailed}/>}
      </div>
    )
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

export default HomePage

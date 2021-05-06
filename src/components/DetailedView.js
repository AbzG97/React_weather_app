import React from 'react'
import styled from 'styled-components'

function DetailedView({detailed}) {
    return (
        <StyledCard>
            {/* <p className="time">{date} </p> */}
            <p className="date">{new Date(detailed.dt * 1000).toDateString()}</p>
            <p className="temp">{detailed.temp.day}<span>&#176;C</span></p>
            <div className="minmax">
                <p>L:{detailed.temp.min}<span>&#176;C</span></p>
                <p>H:{detailed.temp.max}<span>&#176;C</span></p>
            </div>
            <img src={`http://openweathermap.org/img/wn/${detailed.weather[0].icon}@2x.png`} alt={detailed.weather[0].main}/> 
            <p className="weather">{detailed.weather[0].description}</p>
            <div className="weatherData">
                <div className="temps">
                    <h1>Temperatures</h1>
                    <p>Morning: {detailed.temp.morn}<span>&#176;C</span></p>
                    <p>Day: {detailed.temp.day}<span>&#176;C</span></p>
                    <p>Evening: {detailed.temp.eve}<span>&#176;C</span></p>
                    <p>Night: {detailed.temp.night}<span>&#176;C</span></p>
                </div>

                <div className="temps">
                    <h1>Wind</h1>
                    <p>Degrees: {detailed.wind_deg}</p>
                    <p>Speed: {detailed.wind_speed} km/h</p>
                </div>
               
               <div className="timings">
                   <h1>Timings</h1>
                   <p>Sunrise: {new Date(detailed.sunrise * 1000).toLocaleTimeString()}</p>
                   <p>Sunrset: {new Date(detailed.sunset * 1000).toLocaleTimeString()}</p>
                   <p>Moonset: {new Date(detailed.moonset * 1000).toLocaleTimeString()}</p>
                   <p>Moonrise: {new Date(detailed.moonrise * 1000).toLocaleTimeString()}</p>
               </div>

               <div className="other data">
                   <h1>Extra data</h1>
                   <p>Humidity: {detailed.humidity}%</p>
                   <p>Pressure: {detailed.pressure} hPa</p>
               </div>
            </div>         
        </StyledCard>
    )
}

const StyledCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    letter-spacing: 3px;
    color: white;
    .date {
        font-size: 2rem;
    }
    .temp {
        font-size: 3rem;
        span {
            font-size: 1.25rem;
        }
    }
    .minmax {
        font-size: 1.15rem;
        display: flex;
        flex-direction: row;
        width: 50%;
        align-items: center;
        justify-content: space-evenly;    
    }
    .weather {
        font-size: 1.20rem;
    }

    .weatherData {
        display: grid;
        grid-template-columns: 50% 50%;
        width: 75%;
        grid-gap: 10px;
        text-align: center;
        padding-top: 1rem;
        margin-top: .5rem;
        h1 {
            letter-spacing: 7px;
            font-size: 2rem;
        }
    }
` 

export default DetailedView;

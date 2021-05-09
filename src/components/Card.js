import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function Card({daily, setDetailed}) {

    const GetDetailedWeatherData = () => {
        localStorage.setItem("daily", JSON.stringify(daily));
        setDetailed(daily);

    }
    
    return (
        <StyledCard>
            <p className="time">{new Date(daily.dt * 1000).toDateString()} </p>
            <p className="temp">{daily.temp.day}<span>&#176;C</span></p>
            <div className="minmax">
                <p>L:{daily.temp.min}<span>&#176;C</span></p>
                <p>H:{daily.temp.max}<span>&#176;C</span></p>
            </div>
            <img src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} alt={daily.weather[0].main}/> 
            <p className="weather">{daily.weather[0].description}</p>
            <Link to={`/details/${daily.id}`} onClick={GetDetailedWeatherData} className="detailsBtn">Details</Link>       
        </StyledCard>
    )
}

const StyledCard = styled.div`
  
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-bottom: 3px lightgreen solid;
    margin: .5rem;
    letter-spacing: 3px;
    color: white;
    
    .detailsBtn {
        color: white;
        text-decoration: none;
        background-color: transparent;
        border: 1px solid limegreen;
        padding: 1rem;
        margin: 1rem;
        font-family: 'Cairo', sans-serif;
        font-size: 1rem;
        letter-spacing: 3px;
        cursor: pointer;
        border-radius: 50px;
        transition: all .25s ease-in-out;
        &:hover {
            color: black;
            background-color: limegreen;
        }
   
    }
    .time {
        font-size: 1.25rem;
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
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
       
        
    }
    .weather {
        font-size: 1.20rem;
    }
` 

export default Card;

import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

function WeatherCards({weatherData, locationData, setDetailed}) {
    console.log(weatherData);
    weatherData.daily.forEach((element) => {
        element["id"] = uuidv4();
    });
    return (
        <StyledWeatherCards>
            <div className="locationInfo">
                <p className="location">{locationData.name}, {locationData.sys.country}</p>
            </div>
            <div className="cards">
                {weatherData.daily.map((daily) => (
                    <Card key={daily.id} daily={daily} setDetailed={setDetailed}/>
                ))}
            </div>
        </StyledWeatherCards>
    )
}

const StyledWeatherCards = styled.div`
    .cards {
        align-items: center;
        justify-items: center;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: auto;
        width: 100%;
    }
    .locationInfo {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: .75em;
        
        .location {
            color: lightskyblue;
            font-size: 2rem;
            letter-spacing: 5px;
        }
    }
    @media (max-width: 1250px) {
        .cards {
            grid-template-columns: 33% 33% 33%;
            grid-template-rows: auto;
        }
    }
    @media (max-width: 850px) {
        .cards {
            grid-template-columns: 50% 50%;
            grid-template-rows: auto;
        }
    }
    @media (max-width: 600px) {
        .cards {
            grid-template-columns: 100%;
            grid-template-rows: auto;
        }
    }
    
    `
export default WeatherCards

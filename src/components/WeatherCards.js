import React from 'react'
import Card from './Card'
import styled from 'styled-components'

function WeatherCards({weatherData, locationData}) {
    return (
        <StyledWeatherCards>
            <div className="locationInfo">
                <p className="title">React Weather App</p>
                <p className="location">{locationData.name}, {locationData.sys.country}</p>
            </div>
            <div className="cards">
                {weatherData.daily.map((daily) => (
                    <Card daily={daily}/>
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
        .title {
            color: white;
            font-size: 3rem;
            letter-spacing: 5px;
        }
        .location {
            color: lightskyblue;
            font-size: 2rem;
            letter-spacing: 5px;
        }

    }
    `
export default WeatherCards

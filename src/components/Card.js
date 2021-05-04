import React from 'react'
import styled from 'styled-components'

function Card({daily}) {
    const [date, setDate] = React.useState();
    React.useEffect(() => {
        const timestamp = new Date(daily.dt * 1000);
        setDate(timestamp.toDateString());
     
    }, [])
    
    return (
        <StyledCard>
            <p className="time">{date} </p>
            <p className="temp">{daily.temp.day}<span>&#176;C</span></p>
            <div className="minmax">
                <p>L:{daily.temp.min}<span>&#176;C</span></p>
                <p>H:{daily.temp.max}<span>&#176;C</span></p>
            </div>
            <img src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`} alt={daily.weather[0].main}/> 
            <p className="weather">{daily.weather[0].description}</p>
            <button>Details</button>
           
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

    button {
        background-color: transparent;
        border: 1px solid limegreen;
        padding: .5rem;
        margin: 1rem;
        font-family: 'Cairo', sans-serif;
        font-size: 1rem;
        letter-spacing: 3px;
        color: white;
        cursor: pointer;
        border-radius: 50px;
        width: 40%;
        transition: all .25s ease-in-out;
        &:hover {
            color: black;
            background-color: limegreen;
        }
    }


` 

export default Card;

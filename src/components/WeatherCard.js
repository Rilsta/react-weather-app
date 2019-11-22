import React from 'react';
import Weekday from './WeekDay';

const WeatherCard = props => (
    <div className="weather_card_container">
        <Weekday 
            weekday={props.weekday}
            picture={props.picture}
            highTemp={props.highTemp}
            lowTemp={props.lowTemp}
        />
    </div>
)

export default WeatherCard
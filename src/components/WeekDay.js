import React from 'react';

const WeekDay = props => (
    <div className="weekday_container">
        <p className="weekday">{props.weekday}</p>
        <img className="picture" src={props.picture}></img>
        <div className="temp_container">
            <p className="highTemp">{props.highTemp}</p>
            <p className="lowTemp">{props.lowTemp}</p>
        </div>
    </div>
)

export default WeekDay
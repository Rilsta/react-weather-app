import React from "react";
import WeatherCard from "./WeatherCard";
import weatherData from '../weatherData';
import Hourly from './Hourly'
// import Clock from "./Clock";

// this should be put in a helper file I think.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const cards = weatherData.weekdays;
const listDays = cards.map((card) =>
    <WeatherCard
        title="Show Hourly"
        weekday={card.weekday}
        picture={card.picture}
        highTemp={getRandomInt(60, 90) + "°"}
        lowTemp={getRandomInt(30, 60) + "°"}>
            <Hourly hourlyTemp={weatherData.weekdays[0].hourly} />
    </WeatherCard>
);

const App = props => (
    <div className="app_container">
        <div className="list_days">
            {listDays}
        </div>
    </div>
)

export default App
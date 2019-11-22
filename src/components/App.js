import React from "react";
import WeatherCard from "./WeatherCard";
import weatherData from '../weatherData';
import sunny from '../sunny.svg';
import mostlycloudy from '../mostlycloudy.svg';
import rainy from '../rainy.svg';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const App = props => (
    <div className="app_container"> 
        <WeatherCard 
            weekday={weatherData.weekdays[0]} 
            picture={sunny}
            highTemp={getRandomInt(60, 90) + "°"}
            lowTemp={getRandomInt(30, 60) + "°"}
        />
        <WeatherCard 
            weekday={weatherData.weekdays[1]} 
            picture={mostlycloudy}
            highTemp={getRandomInt(60, 90) + "°"}
            lowTemp={getRandomInt(30, 60) + "°"}
        />
        <WeatherCard 
            weekday={weatherData.weekdays[2]} 
            picture={rainy}
            highTemp={getRandomInt(60, 90) + "°"}
            lowTemp={getRandomInt(30, 60) + "°"}
        />
        <WeatherCard 
            weekday={weatherData.weekdays[3]} 
            picture={rainy}
            highTemp={getRandomInt(60, 90) + "°"}
            lowTemp={getRandomInt(30, 60) + "°"}
        />
        <WeatherCard 
            weekday={weatherData.weekdays[4]} 
            picture={sunny}
            highTemp={getRandomInt(60, 90) + "°"}
            lowTemp={getRandomInt(30, 60) + "°"}
        />
        <WeatherCard 
            weekday={weatherData.weekdays[5]} 
            picture={mostlycloudy}
            highTemp={getRandomInt(60, 90) + "°"}
            lowTemp={getRandomInt(30, 60) + "°"}
        />
        <WeatherCard 
            weekday={weatherData.weekdays[6]} 
            picture={rainy}
            highTemp={getRandomInt(60, 90) + "°"}
            lowTemp={getRandomInt(30, 60) + "°"}
        />
    </div>
)

export default App
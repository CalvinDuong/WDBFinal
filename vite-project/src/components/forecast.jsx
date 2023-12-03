import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './forecast.css';

const weatherImages = {
  0: '../../icons/day.svg', // clear day
  1: '../../icons/cloudy-day-1.svg', // clear day
  2: '../../icons/cloudy-day-2.svg', // partly cloudy
  3: '../../icons/cloudy.svg', // overcast
  45: '../../icons/cloudy.svg', // foggy
  48: '../../icons/cloudy.svg', //foggy
  51: '../../icons/rainy-4.svg', // light drizzle
  53: '../../icons/rainy-5.svg', // moderate drizzle
  55: '../../icons/rainy-6.svg', // dense drizzle
  56: '../../icons/rainy-4.svg', // light freezing drizzle
  57: '../../icons/rainy-6.svg', // dense freezing drizzle
  61: '../../icons/rainy-4.svg', // light rain
  63: '../../icons/rainy-5.svg', // medium rain
  65: '../../icons/rainy-6.svg', // dense rain
  71: '../../icons/snowy-4.svg', // slight snow
  73: '../../icons/snowy-5.svg', // medium snow
  75: '../../icons/snowy-6.svg', // heavy snow
  77: '../../icons/snowy-4.svg', // snow grains
  80: '../../icons/rainy-4.svg', // slight rain showers
  81: '../../icons/rainy-5.svg', // moderate rain showers
  82: '../../icons/rainy-6.svg', // violent rain showers
  85: '../../icons/snowy-4.svg', // slight snow showers
  86: '../../icons/snowy-6.svg', // heavy snow showers
  95: '../../icons/thunder.svg' // thunderstorm
}

function DayOfWeek({ day, weatherImage, temperature }) {
  return (
    <div className="day-info">
      <div className="day-content">
        <h2>{day}</h2>
        <img className="pic" src={weatherImage} alt={day} />
        <h2>{temperature}°F</h2>
      </div>
    </div>
  );
}

function ForeCast() {
  const [forecast, setForecast] = React.useState([]);

  useEffect(() => {
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=37.868951&longitude=-122.259696&daily=weather_code,apparent_temperature_min&temperature_unit=fahrenheit&timezone=auto')
      .then(response => {
        const dates = response.data.daily.time;
        const weather = response.data.daily.weather_code;
        const temperature = response.data.daily.apparent_temperature_min;
        const forecastData = dates.map((date, index) => ({
          date: (new Date(date)).toLocaleDateString('en-US', { weekday: 'short', month: '2-digit', day: '2-digit' }),
          image_url: weatherImages[weather[index]],
          high: temperature[index]
        }));
        setForecast(forecastData);
        console.log(forecastData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="forecast-container">
        {forecast.slice(0, 7).map(({ date, image_url, high }, index) => (
          <DayOfWeek key={date} day={date} weatherImage={image_url} temperature={high} style={{ '--i': index }} />
        ))}
      </div>
    </div>
  );
}

export default ForeCast;
import * as React from 'react';
import DayContainer from './DayContainer';

const { useEffect, useState } = React;

function WeekContainer() {
  const [inputError, setInputError] = useState(false);
  const [weather, setWeather] = useState({
    fullWeather: [],
    dailyStartWeather: [] as any[],
    dailyEndWeather: [] as any[],
    error: false,
  });

  async function retrieveWeatherData() {
    const weatherURL = 'https://api.weather.gov/points/38.8894,-77.0352'
    
    let nextURL = '';
    fetch(weatherURL).then(res => {
      const data = res.json();
      return data;
    }).then((res) => {
      nextURL = res.properties.forecast;

      fetch(nextURL).then(res => {
        const finalData = res.json();
        return finalData;
      }).then((res) => {
        console.log('final res', res);
        setWeather({
          ...weather,
          fullWeather: res.properties.periods,
        });
      }).catch((err) => {
        console.log('Second fetch err', err);  
      });

    }).catch((err) => {
      console.log('fetch1 err', err);
    });
  }

  // TODO: Displau loader while the api data is loading and get JSX to display once data is loaded locally
  function splitDailyData() {
    weather.fullWeather.forEach((forecast: any) => {
      if (forecast.startTime.includes('18:00:00')) {
        weather.dailyEndWeather.push(forecast);
      } else {
        weather.dailyStartWeather.push(forecast);
      }
    });
    console.log('split state', weather);
  }

  useEffect(() => {
    if (weather.fullWeather.length === 0) {
      retrieveWeatherData();
    }
    splitDailyData();
  }, [weather]);

  console.log('outside func state', weather);
  
  if (weather.dailyStartWeather.length !== 0) {
    return (
      <div>
        <h1 className="Week-header">5 Day Forecast</h1>

        <div className="Week-container">
          <h1>WORK</h1>
          
          {weather.dailyStartWeather.map((d: any, idx: number) => {
            console.log('d', d);
            return <DayContainer data={d} idx={idx} key={idx} />
          })}
          {weather.dailyEndWeather.map((d: any, idx: number) => {
            console.log('d', d);
            return <DayContainer data={d} idx={idx} key={idx} />
          })}
        </div>
      </div>
    )
  }

  return <h1>Loading</h1>
}

export default WeekContainer;
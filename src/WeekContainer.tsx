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
    loading: true,
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
    setWeather({
      ...weather,
      loading: false,
    });
    console.log('split state', weather);
  }

  useEffect(() => {
    if (weather.fullWeather.length === 0) {
      retrieveWeatherData();
    }
    splitDailyData();
  }, [weather.loading]);

  console.log('outside func state', weather);

  return (
    <>
      {weather.loading && ( <h1>Loading</h1> )}

      <h1 className="Week-header">5 Day Forecast</h1>

      <div className="Week-container">        
        {weather.dailyStartWeather.map((d: any, idx: number) => {
          console.log('d', d);
          return <DayContainer data={d} idx={idx} key={idx} />
        })}
        {weather.dailyEndWeather.map((d: any, idx: number) => {
          console.log('d', d);
          return <DayContainer data={d} idx={idx} key={idx} />
        })}
      </div>
    </>
  );
}

export default WeekContainer;
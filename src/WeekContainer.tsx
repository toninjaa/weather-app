import * as React from 'react';
import apiConfig from './apiKeys';
import DayContainer from './DayContainer';

const { useEffect, useState } = React;

function WeekContainer() {
  const weatherKey = apiConfig.openWeatherMapKey;
  const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=08817&units=imperial&APPID=${weatherKey}`;

  const [weather, setWeather] = useState({
    fullWeather: [],
    dailyWeather: [],
    error: false,
  });

  useEffect(() => {
    fetch(weatherURL).then((res) => {
      return res.json();
    }).then((res) => {
      console.log('res', res);
      const daily = res.list.filter((day: any) => {
        return day.dt_txt.includes('18:00:00')
      });
      setWeather({
        ...weather,
        fullWeather: res.list,
        dailyWeather: daily,
      });

    }).catch((rej) => {
      console.log('weather fetch failed', rej);
      setWeather({
        ...weather,
        error: true,
      });
    })
  }, [])

  console.log('weather', weather);

  return (
    <div>
      <h1 className="Week-header">Weekly Forecast</h1>
      <div className="Week-container">
      {weather.dailyWeather.map((d: any, idx: number) => {
        return <DayContainer data={d} idx={idx} key={idx} />
      })}
      </div>
    </div>
  )
}

export default WeekContainer;
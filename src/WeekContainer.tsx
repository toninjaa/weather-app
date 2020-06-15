import * as React from 'react';
import apiConfig from './apiKeys';

const { useEffect } = React;

function WeekContainer() {
  const weatherKey = apiConfig.openWeatherMapKey;
  const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=08817&units=imperial&APPID=${weatherKey}`;

  useEffect(() => {
    fetch(weatherURL).then((res) => {
      return res.json();
    }).then((res) => {
      console.log('data', res);
    }).catch((rej) => {
      console.log('weather fetch failed', rej);
    })
  }, [])

  return (
    <>
      <h1>Week Container</h1>
    </>
  )
}

export default WeekContainer;
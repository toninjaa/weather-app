import * as React from 'react';
import DayContainer from './DayContainer';

const { useEffect, useState } = React;

function WeekContainer() {
  const weatherKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
  const [zip, setZip] = useState('');
  const [inputError, setInputError] = useState(false);
  const [weather, setWeather] = useState({
    fullWeather: [],
    dailyWeather: [],
    error: false,
  });

  function retrieveWeatherData(z: string) {
    const weatherURL = `https://crossorigin.me/http://api.openweathermap.org/data/2.5/forecast?zip=${z}&units=imperial&APPID=${weatherKey}`;
    
    fetch(weatherURL).then((res) => {
      return res.json();
    }).then((res) => {
      const daily = res.list.filter((day: any) => {
        return day.dt_txt.includes('18:00:00')
      });
      setWeather({
        ...weather,
        fullWeather: res.list,
        dailyWeather: daily,
      });
    }).catch((rej) => {
      setWeather({
        ...weather,
        error: true,
      });
    })
  }

  function validZip(z: string) {
    let valid = true;
    if (z.length < 5) {
      valid = false;
    }
    return valid;
  }

  useEffect(() => {
    if (weather.fullWeather.length === 0) {
      setZip('08817');
      retrieveWeatherData('08817');
      return;
    }
  }, []);

  function handleZipChange(event: any) {
    event.preventDefault();
    setZip(event.target.value)
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    if (validZip(zip)) {
      setInputError(false);
      retrieveWeatherData(zip);
      return;
    }
    setInputError(true);
  }

  useEffect(() => {
    if (inputError) {
      alert('Please enter valid zipcode');
    }
  }, [inputError]);

  return (
    <div>
      <h1 className="Week-header">Weekly Forecast {zip.length === 5 ? `for ${zip}` : ''}</h1>
      <form>
        <label>
          ZipCode:
          <input type="text" value={zip} onChange={handleZipChange} />
          <button onClick={handleSubmit}>submit</button>
        </label>
      </form>

      <div className="Week-container">
      {weather.dailyWeather.map((d: any, idx: number) => {
        return <DayContainer data={d} idx={idx} key={idx} />
      })}
      </div>
    </div>
  )
}

export default WeekContainer;
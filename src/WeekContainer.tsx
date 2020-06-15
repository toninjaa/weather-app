import * as React from 'react';
import apiConfig from './apiKeys';
import DayContainer from './DayContainer';

const { useEffect, useState } = React;

// interface Props {
//   zipCode?: string;
// }

function WeekContainer() {
  const weatherKey = apiConfig.openWeatherMapKey;
  // const { zipCode } = props;
  const [zip, setZip] = useState('');

  const [weather, setWeather] = useState({
    fullWeather: [],
    dailyWeather: [],
    error: false,
  });

  function retrieveWeatherData(z: string) {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=${z}&units=imperial&APPID=${weatherKey}`;

    console.log('weatherURL', weatherURL);
    
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

  useEffect(() => {
    console.log('ue zip', zip);
    
    if (weather.fullWeather.length === 0) {
      retrieveWeatherData('08817');
      return;
    }
  }, []);

  function handleZipChange(event: any) {
    event.preventDefault();
    setZip(event.target.value)
    console.log('zipChange zip', event.target.value);
    // if (event.target.value === 5) {
    //   retrieveWeatherData(event.target.value);
    // }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log('handleSubmithit');
    
    // if (event.target.value === 5) {
      retrieveWeatherData(zip);
    // }
  }

  return (
    <div>
      <h1 className="Week-header">Weekly Forecast</h1>
      <form>
        <label>
          ZipCode:
          <input type="text" value={zip} onChange={handleZipChange}/>
          <button onClick={handleSubmit}>submit</button>
        </label>
      <div className="Week-container">
      {weather.dailyWeather.map((d: any, idx: number) => {
        return <DayContainer data={d} idx={idx} key={idx} />
      })}
      </div>
      </form>
    </div>
  )
}

export default WeekContainer;
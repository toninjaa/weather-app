import * as React from 'react';
import DayContainer from './DayContainer';

const { useEffect, useState } = React;

function WeekContainer() {
  const [zip, setZip] = useState('');
  const [inputError, setInputError] = useState(false);
  const [weather, setWeather] = useState({
    fullWeather: [],
    dailyWeather: [],
    error: false,
  });

  async function retrieveWeatherData() {
    const weatherURL = 'https://api.weather.gov/points/38.8894,-77.0352'
    
    let nextURL = '';
    fetch(weatherURL).then(res => {
      const data = res.json();
      console.log('data', data);
      return data;
    }).then((res) => {
      console.log('res', res);
      nextURL = res.properties.forecast;
      console.log('nextURL', nextURL);
      // return nextURL;

      fetch(nextURL).then(res => {
        const finalData = res.json();
        console.log('finalData', finalData);
        return finalData;
      }).then((res) => {
        console.log('final res', res);
        setWeather({
          ...weather,
          fullWeather: res.properties.periods,
        })
      }).catch((err) => {
        console.log('Second fetch err', err);  
      });

    }).catch((err) => {
      console.log('fetch1 err', err);
    });
  }

  useEffect(() => {
    if (weather.fullWeather.length === 0) {
      retrieveWeatherData();
    }
  }, []);

  return (
    <div>
      <h1 className="Week-header">Weekly Forecast {zip.length === 5 ? `for ${zip}` : ''}</h1>
      {/* <form>
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
      </div> */}
      {weather.fullWeather.map((d: any, idx: number) => {
        console.log('d', d);
        return <DayContainer data={d} idx={idx} key={idx} />
      })}
    </div>
  )
}

export default WeekContainer;
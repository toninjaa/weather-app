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

  async function retrieveWeatherData(z: string) {
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
        // do something with this data
      }).catch((err) => {
        console.log('Second fetch err', err);  
      });

    }).catch((err) => {
      console.log('fetch1 err', err);
    });

    // fetch(nextURL).then(res => {
    //   const finalData = res.json();
    //   console.log('finalData', finalData);
    //   return finalData;
    // }).then((res) => {
    //   console.log('final res', res);
    //   // do something with this data
    // }).catch((err) => {
    //   console.log('Second fetch err', err);  
    // });
    

    
    
    // fetch(weatherURL).then((res) => {
    //   console.log(res.json());
      
    //   return res.json();
    // }).then((res) => {
    //   console.log(res.properties);
    //   fetch(res.properties.forecast).then((res) => {
    //     console.log('2nd res', res.json());
        
    //     return res.json();
    //   }).catch((err) => { console.log('err', err);
    //   })
    // })
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
    </div>
  )
}

export default WeekContainer;
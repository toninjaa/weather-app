import * as React from 'react';
import DayContainer from './DayContainer';
import ErrorModal from './ErrorModal';
import LoaderModal from './LoaderModal';
import LatMask from '../utils/LatMask';
import LongMask from '../utils/LongMask';
import {
  Button,
  Checkbox,
} from '@material-ui/core';

const { useEffect, useState } = React;

function WeekContainer() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [url, setUrl] = useState('https://api.weather.gov/points/40.5187,-74.4121')
  const [weather, setWeather] = useState({
    fullWeather: [],
    dailyStartWeather: [] as any[],
    dailyEndWeather: [] as any[],
    error: false,
    errorMsg: 'Error',
    loading: true,
    inputError: false,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.id === "latitude") {
      setLat(e.currentTarget.value)
    }
    if (e.currentTarget.id === "longitude") {
      setLong(e.currentTarget.value)
    }
  }

  function handleSubmit() {
    let tempLat = "";
    let tempLong = "";

    if (lat.length <= 8) {
      tempLat = lat;
    }
    if (long.length <= 8) {
      tempLong = long;
    }

    console.log("lat", lat, "long", long, "tempLat", tempLat, "tempLong", tempLong);
    
    if (tempLat !== "" && tempLong !== "") {
      setUrl(`https://api.weather.gov/points/${tempLat},${tempLong}`)
      retrieveWeatherData(url)
    } else {
      setWeather({
        ...weather,
        inputError: true,
      });
    }
  }

  async function retrieveWeatherData(u: string) {
    let nextURL = '';
    fetch(u).then(res => {
      if (!res || res.status !== 200) {
        setWeather({
        ...weather,
        error: true,
        errorMsg: 'Error fetching initial request',
        });
      }
      const data = res.json();
      return data;
    }).then((res) => {
      nextURL = res.properties.forecast;
      console.log('nexturl', nextURL);
      
      fetch(nextURL).then(res => {
        const finalData = res.json();
        return finalData;
      }).then((res) => {
        setWeather({
          ...weather,
          fullWeather: res.properties.periods,
        });
      }).catch((err) => {
        return setWeather({
          ...weather,
          error: true,
          // errorMsg: err,
          errorMsg: 'poop',
        });
      });
    }).catch((err) => {
      return setWeather({
        ...weather,
        error: true,
        // errorMsg: err,
        errorMsg: 'poop2',
      });
    });
  }

  function arrSort(arr: any[]) {
    arr.sort((a, b) => {
      let dateA = new Date(a.startTime);
      let dateB = new Date(b.startTime);
      if (dateA > dateB) {
        return 1;
      }
      if (dateA < dateB) {
        return -1;
      }
      return 0;
    })
    return arr;
  }

  function splitDailyData() {
    let tmpArrA = [] as any[];
    let tmpArrB = [] as any[];
    weather.fullWeather.forEach((forecast: any) => {
      if (forecast.startTime.includes('18:00:00')) {
        tmpArrB.push(forecast);
      } else {
        tmpArrA.push(forecast);
      }
    });

    setWeather({
      ...weather,
      dailyStartWeather: arrSort(tmpArrA),
      dailyEndWeather: arrSort(tmpArrB),
      loading: false,
    });
  }

  function handleErrorClose() {
    setWeather({
      ...weather,
      error: false,
      errorMsg: '',
    });
  }

  useEffect(() => {
    if (weather.fullWeather.length === 0) {
      retrieveWeatherData(url);
    }
    if (weather.dailyStartWeather.length === 0) {
      splitDailyData();
    }
  
    // * Force error test
    // setWeather({
    //   ...weather,
    //   error: true,
    //   errorMsg: 'Sorry, a problem occurred trying to load the weather data. Please refresh the page to try again.',
    // });

    // * Force loader test
    // setWeather({
    //   ...weather,
    //   loading: true,
    // });
  }, [weather.loading, weather.dailyStartWeather.length, url]);

  return (
    <>
      {weather.loading && (
        <LoaderModal msg="Loading Weather Data " />
      )}

      <div className="Inputs">
        <form>
          <LatMask
            id="latitude"
            label="latitude"
            variant="outlined"
            onChange={handleChange}
            error={weather.inputError}
            helperText="Enter the latitude of your location to the 4th decimal point"
          />
          <Checkbox />
          <LongMask
            id="longitude"
            label="longitude"
            variant="outlined"
            onChange={handleChange}
            error={weather.inputError}
            helperText="Enter the longitude of your location to the 4th decimal point"
          />
          <Checkbox />
          <Button onClick={handleSubmit}>Submit</Button>
        </form>
      </div>

      <h1 className="Week-header">7 Day Forecast for Edison, NJ</h1>

      <div className="Week-container">        
        <DayContainer
          dayData={weather.dailyStartWeather}
          nightData={weather.dailyEndWeather}
        />
        <ErrorModal
          open={weather.error}
          msg={weather.errorMsg}
          handleClose={handleErrorClose}
        />
      </div>
    </>
  );
}

export default WeekContainer;
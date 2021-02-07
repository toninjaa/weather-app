import * as React from 'react';
import DayContainer from './DayContainer';
import ErrorModal from './ErrorModal';
import LoaderModal from './LoaderModal';
// import Header from './Header';

const { useEffect, useState } = React;

// TODO: add geo-coding to allow input for new cities
// TODO: include hourly forecast option
function WeekContainer() {
  const [weather, setWeather] = useState({
    fullWeather: [],
    dailyStartWeather: [] as any[],
    dailyEndWeather: [] as any[],
    error: false,
    errorMsg: '',
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
        setWeather({
          ...weather,
          fullWeather: res.properties.periods,
        });
      }).catch((err) => {
        setWeather({
          ...weather,
          error: true,
          errorMsg: err,
        });
      });
    }).catch((err) => {
      setWeather({
        ...weather,
        error: true,
        errorMsg: err,
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
      retrieveWeatherData();
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
  }, [weather.loading, weather.dailyStartWeather.length]);

  return (
    <>
      {weather.loading && (
        <LoaderModal msg="Loading Weather Data " />
      )}

      <h1 className="Week-header">7 Day Forecast for NYC</h1>

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
import * as React from 'react';
import DayContainer from './DayContainer';
import ErrorModal from './ErrorModal';
import LoaderModal from './LoaderModal';

const { useEffect, useState } = React;

function WeekContainer() {
  const [weather, setWeather] = useState({
    fullWeather: [],
    dailyStartWeather: [] as any[],
    dailyEndWeather: [] as any[],
    error: false,
    errorMsg: 'We\'re sorry, the weather API\'s server is temporarily down. Please try again later',
    loading: true,
  });

  async function retrieveWeatherData() {
    setWeather({
      ...weather,
      loading: true,
    });
    
    const weatherURL = 'https://api.weather.gov/points/40.71427,-74.00597'
    const res1 = await fetch(weatherURL);
    // if (res1.status === 200) {
    if (res1) {
      const data = await res1.json();
      if (data) {
        const nextURL = data.properties.forecast;
        const res2 = await fetch(nextURL);

        // if (res2.status === 200) {
        if (res2) {
          const finalData = await res2.json();
          if (finalData) {
            setWeather({
              ...weather,
              fullWeather: finalData.properties.periods,
              loading: false,
            });
            return;
          }
        }
      }

      setWeather({
        ...weather,
        error: true,
        loading: false,
      });
    }
  }
  console.log(weather);

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
      return;
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
  }, [weather.fullWeather.length]);

  return (
    <>
      <LoaderModal msg="Loading Weather Data..." open={weather.loading} />

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
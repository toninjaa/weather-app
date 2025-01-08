import { useEffect, useState } from 'react';
import DayContainer from './DayContainer';
import ErrorModal from './ErrorModal';
import LoaderModal from './LoaderModal';
import { State } from '../types/States';

interface Props {
  state: State,
}

export function WeekContainer(props: Props) {
  const { state } = props;
  const [weather, setWeather] = useState({
    fullWeather: [],
    dailyStartWeather: [] as any[],
    dailyEndWeather: [] as any[],
    error: false,
    errorMsg: 'We\'re sorry, the weather API\'s server is temporarily down. Please try again later',
    loading: false,
  });

  function splitDailyData(w: any) {
    let tmpArrA = [] as any[];
    let tmpArrB = [] as any[];
    w.forEach((forecast: any) => {
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

  async function retrieveWeatherData() {
    setWeather({
      ...weather,
      loading: true,
    });

    const weatherURL = `https://api.weather.gov/points/${state.Latitude},${state.Longitude}`;

    const res1 = await fetch(weatherURL);
    if (res1) {
      const data = await res1.json();
      if (data) {
        const nextURL = data.properties.forecast;
        const res2 = await fetch(nextURL);

        if (res2) {
          const finalData = await res2.json();
          if (finalData) {
            splitDailyData(finalData.properties.periods);
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

  function handleErrorClose() {
    setWeather({
      ...weather,
      error: false,
      errorMsg: '',
    });
  }

  useEffect(() => {
    retrieveWeatherData()
  }, [state]);

  return (
    <>
      <LoaderModal msg="Loading Weather Data..." open={weather.loading} />
      
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

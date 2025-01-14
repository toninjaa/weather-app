import { useEffect, useState, MouseEvent } from 'react';
import Stack from '@mui/material/Stack';
import ForecastDetailModal from './ForecastDetailModal';
import Day from './Day';
import ErrorModal from './ErrorModal';
import LoaderModal from './LoaderModal';
import { DailyWeather, FullDayWeather } from '../types/DailyWeather';
import { State } from '../types/States';

interface Props {
  state: State,
}

export default function Week(props: Props) {
  const { state } = props;
  const [weather, setWeather] = useState({
    forecast: [] as FullDayWeather[],
    error: false,
    errorMsg: 'We\'re sorry, the weather API\'s server is temporarily down. Please try again later',
    loading: false,
  });
  const [detail, setDetail] = useState({
    detail: '',
    name: '',
    show: false,
    time: '',
  });

  function combineEntries(day: DailyWeather, night: DailyWeather): FullDayWeather {
    return {
      dayDetailedForecast: day.detailedForecast,
      dayIcon: day.icon,
      dayName: day.name,
      dayProbabilityOfPrecipitation: { unitCode: day.probabilityOfPrecipitation.unitCode, value: day.probabilityOfPrecipitation.value },
      dayShortForecast: day.shortForecast,
      dayTemperature: day.temperature,
      dayWindSpeed: day.windSpeed,
      nightDetailedForecast: night.detailedForecast,
      nightIcon: night. icon,
      nightName: night.name,
      nightProbabilityOfPrecipitation: { unitCode: night.probabilityOfPrecipitation.unitCode, value: night.probabilityOfPrecipitation.value },
      nightShortForecast: night.shortForecast,
      nightTemperature: night.temperature,
      nightWindSpeed: night.windSpeed,
    }
  }

  function splitDailyData(w: DailyWeather[]) {
      console.log('w', w)
      const combinedForecast = [] as FullDayWeather[];
      // for (let i = 0; i < w.length; i++) {
      // w.reduce((a: DailyWeather, b: DailyWeather) => {
      w.forEach((a: DailyWeather, i: number) => {
        if (w[i+1] !== undefined) {
          if (new Date(a.startTime).getDate() === new Date(w[i+1].startTime).getDate()) {
            combinedForecast.push(combineEntries(a, w[i+1]))
          }
        }
        // console.log('a', a)
        // console.log('i+1', w[i+1])
        // let a: DailyWeather = {} as DailyWeather;
        // let b: DailyWeather = {} as DailyWeather;
        // w[i] = a;
        // w[i+1] = b;
        // const firstDate = new Date(a.startTime);
        // const secondDate = new Date(b.startTime);


        // if (firstDate.getDate() !== secondDate.getDate() || w[i+1] === undefined) {
        //   return;
        // }

        // if (w[i+1] === undefined) {
        //   return;
        // }

        // Grab both entries for the same day
        // if (firstDate.getDate() === secondDate.getDate()) {
        //   let day: DailyWeather;
        //   let night: DailyWeather;
          
        //   // Since they are returned in order and numbered, verify which entry is day and which is night
        //   if (firstDate.getTime() < secondDate.getTime()) {
        //     day = a;
        //     night = b;
        //   } else {
        //     day = b;
        //     night = a;
        //   }

        //   combinedDay.dayDetailedForecast = day.detailedForecast;
        //   combinedDay.dayIcon = day.icon;
        //   combinedDay.dayName = day.name;
        //   combinedDay.dayProbabilityOfPrecipitation = { unitCode: day.probabilityOfPrecipitation.unitCode, value: day.probabilityOfPrecipitation.value };
        //   combinedDay.dayShortForecast = day.shortForecast;
        //   combinedDay.dayTemperature = day.temperature;
        //   combinedDay.dayWindSpeed = day.windSpeed;
        //   combinedDay.nightDetailedForecast = night.detailedForecast;
        //   combinedDay.nightIcon = night. icon;
        //   combinedDay.nightName = night.name;
        //   combinedDay.nightProbabilityOfPrecipitation = { unitCode: night.probabilityOfPrecipitation.unitCode, value: night.probabilityOfPrecipitation.value };
        //   combinedDay.nightShortForecast = night.shortForecast;
        //   combinedDay.nightTemperature = night.temperature;
        //   combinedDay.nightWindSpeed = night.windSpeed;
        // }
        // combinedForecast.push(combinedDay);
      });

    return combinedForecast;
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
      console.log('res1', data);
      // res1/properties/forecastHourly
      // forecastHourly: "https://api.weather.gov/gridpoints/ALY/52,90/forecast/hourly"
      if (data) {
        const nextURL = data.properties.forecast;
        const res2 = await fetch(nextURL);
        
        if (res2) {
          const finalData = await res2.json();
          // console.log('res2', finalData)
          console.log('periods', finalData.properties.periods)
          
          if (finalData) {
            const combinedForecast = splitDailyData(finalData.properties.periods);
            console.log('combined', combinedForecast)

            setWeather({
              ...weather,
              forecast: combinedForecast,
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

  function handleErrorClose() {
    setWeather({
      ...weather,
      error: false,
      errorMsg: '',
    });
  }

  function handleDetailClick(e: MouseEvent<HTMLElement>) {
    console.log('currentTarget', e.currentTarget);

    setDetail({
      ...detail,
      // name: weather.forecast[key].name,
      // detail: weather.forecast[key].detailedForecast,
      // name: e.currentTarget,
      show: true,
    });
  }

  function handleDetailClose() {
    setDetail({
      ...detail,
      show: false,
    });
  }

  useEffect(() => {
    retrieveWeatherData()
  }, [state]);

  return (
    <>
      <Stack direction='column' alignItems='center' spacing={2}>
        <Stack direction='row' spacing={2}>
          {weather.forecast.map((d: FullDayWeather, i: number) => (
            <Day d={d} i={i} handleDetailClick={handleDetailClick}/>
          ))}
        </Stack>
      </Stack>

      {detail.show && (
        <ForecastDetailModal
          dayName={detail.name}
          dayData={detail.detail}
          time={detail.time}
          onClose={handleDetailClose}
        />
      )}
      
      <LoaderModal
        msg="Loading Weather Data..."
        open={weather.loading}
      />
      
      <ErrorModal
        open={weather.error}
        msg={weather.errorMsg}
        handleClose={handleErrorClose}
      />
    </>
  );
}

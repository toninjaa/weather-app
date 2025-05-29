import { useEffect, useState, MouseEvent } from 'react';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ForecastDetailModal from './ForecastDetailModal';
import Day from './Day';
import ErrorModal from './ErrorModal';
import LoaderModal from './LoaderModal';
import Today from './Today';
import { HalfDayWeather, FullDayWeather } from '../types/Weather';
import { State } from '../types/States';

interface Props {
  state: State,
}

export default function Week(props: Props) {
  const { state } = props;
  const [weather, setWeather] = useState({
    forecast: [] as FullDayWeather[],
    currentWeather: {} as HalfDayWeather,
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
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down('lg'))
  

  function halfDaysToFullDays(day: HalfDayWeather, night: HalfDayWeather): FullDayWeather {
    return {
      dayDetailedForecast: day.detailedForecast,
      dayIcon: day.icon,
      dayName: day.name,
      dayProbabilityOfPrecipitation: { unitCode: day.probabilityOfPrecipitation.unitCode, value: day.probabilityOfPrecipitation.value },
      dayShortForecast: day.shortForecast,
      dayTemperature: day.temperature,
      dayWindSpeed: day.windSpeed,
      nightDetailedForecast: night.detailedForecast,
      nightIcon: night.icon,
      nightName: night.name,
      nightProbabilityOfPrecipitation: { unitCode: night.probabilityOfPrecipitation.unitCode, value: night.probabilityOfPrecipitation.value },
      nightShortForecast: night.shortForecast,
      nightTemperature: night.temperature,
      nightWindSpeed: night.windSpeed,
    }
  }

  function createFullDayArray(w: HalfDayWeather[]) {
      const combinedForecast = [] as FullDayWeather[];

      w.forEach((a: HalfDayWeather, i: number) => {
        if (w[i+1] !== undefined) {
          // If we are checking the weather in the evening, there will be no 'day' info so just push night data
          if (i == 0 && new Date(w[0].startTime).getDate() !== new Date(w[1].startTime).getDate()) {
            combinedForecast.push({
              nightDetailedForecast: w[0].detailedForecast,
              nightIcon: w[0].icon,
              nightName: w[0].name,
              nightProbabilityOfPrecipitation: { unitCode: w[0].probabilityOfPrecipitation.unitCode, value: w[0].probabilityOfPrecipitation.value },
              nightShortForecast: w[0].shortForecast,
              nightTemperature: w[0].temperature,
              nightWindSpeed: w[0].windSpeed,
            } as FullDayWeather)
          }
          if (new Date(a.startTime).getDate() === new Date(w[i+1].startTime).getDate()) {
            combinedForecast.push(halfDaysToFullDays(a, w[i+1]))
          }
        }
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

      if (data) {
        const nextURL = data.properties.forecast;
        const res2 = await fetch(nextURL);
        
        if (res2) {
          const finalData = await res2.json();
          
          if (finalData) {
            const combinedForecast = createFullDayArray(finalData.properties.periods);

            setWeather({
              ...weather,
              currentWeather: finalData.properties.periods[0],
              forecast: combinedForecast,
              loading: false,
            });

            return;
          }
        }
        setWeather({
          ...weather,
          error: true,
          loading: false,
        });
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

  function handleDetailClick(e: MouseEvent<HTMLElement>, d: FullDayWeather) {
    setDetail({
      ...detail,
      name: d.dayName,
      detail: `${d.dayDetailedForecast} ${d.nightName}: ${d.nightDetailedForecast}`,
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
      <Stack
        direction='column'
        alignItems={{ md: 'flex-start', lg: 'center' }}
        spacing={2}
        sx={lg ? {
          margin: '2em'
        } : {}}
      >
        <Today {...weather.currentWeather} />
        <Stack
          direction={{ md: 'column', lg: 'row' }}
          justifyContent='space-between'
          spacing={{ xs: 3, sm: 3, md: 2}}
        >
          {weather.forecast.map((d: FullDayWeather, i: number) => (
            <Day key={i} d={d} i={i} handleDetailClick={handleDetailClick} />
          ))}
        </Stack>
      </Stack>

      <ForecastDetailModal
        dayName={detail.name}
        dayData={detail.detail}
        onClose={handleDetailClose}
        open={detail.show}
      />
      
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

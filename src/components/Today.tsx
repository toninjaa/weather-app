import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { HalfDayWeather } from '../types/Weather';

export default function Today(props: HalfDayWeather) {
  const [today, setToday] = useState({
    icon: '',
    iconAlt: '',
    isDaytime: true,
  });
  const theme = useTheme();
  
  function determineIcon(weather: HalfDayWeather) {
    let icon = './icons/sun.svg';
    let altIcon = "Weather Icon";

    if (weather && weather.shortForecast !== undefined) {
      if (weather.shortForecast.includes("Snow")) {
        altIcon = "Snowflake Icon";
        icon = './icons/snowflake.svg';
      }
      if (weather.shortForecast.includes("Rain") || weather.shortForecast.includes("Drizzle") || weather.shortForecast.includes("Showers")) {
        altIcon = "Raindrop Icon";
        icon ='./icons/rain.svg';
      }
      if (weather.shortForecast.includes("Thunder")) {
        altIcon= "Lightning Icon";
        icon = './icons/lightning.png';
      }
      if (weather.shortForecast.includes("Sunny")) {
        if (weather.shortForecast.includes("Partly")) {
          altIcon = "Sun With Clouds Icon";
          icon ='./icons/partly_cloudy.svg';
        }
        altIcon = "Sun Icon";
        icon ='./icons/sun.svg';
      }
      if (weather.shortForecast.includes("Cloudy")) {
        if (weather.shortForecast.includes("Partly") && weather.isDaytime) {
          altIcon = "Sun With Clouds Icon";
          icon ='./icons/partly_cloudy.svg';
        }
        if (weather.shortForecast.includes("Partly") && !weather.isDaytime) {
          altIcon = "Moon WIth Clouds Icon"
          icon ='./icons/moon_cloudy.svg';
        }
        altIcon = "Cloud Icon";
        icon ='./icons/cloud.svg';
      }
      if (weather.shortForecast.includes("Clear")) {
        if (weather.isDaytime) {
          altIcon = "Sun Icon";
          icon ='./icons/sun.svg';
        }
        if (!weather.isDaytime) {
          altIcon = "Moon Icon";
          icon ='./icons/moon.svg';
        }
      }
      if (weather.shortForecast.includes("Sleet")) {
        altIcon = "Sleet Icon";
        icon ='./icons/sleet.svg';
      }
      if (weather.shortForecast.includes("Haze") || weather.shortForecast.includes("Fog")) {
        altIcon = "Haze Icon";
        icon ='./icons/haze.png';
      }

      setToday({
        ...today,
        iconAlt: altIcon,
        icon: icon,
      });
    }
  }

  useEffect(() => {
    determineIcon(props)
  }, [props]);

  return (
    <Paper
      elevation={20}
      square={false}
      sx={{
        backgroundColor: theme.palette.primary.light,
        padding: '1em',
      }}
    >
      <Stack
        justifyContent='center' 
        direction='row'
        spacing={4}
      >
        <Stack direction='column'>
          <Typography
            variant='h4'
            color={theme.palette.primary.dark}
          >
            {props.name}
          </Typography>
          <Typography>
            Temperature: {props.temperature}°F
          </Typography>
          <Typography>
            {props.shortForecast}
          </Typography>
        </Stack>  
        <Stack>
          <img
            src={today.icon}
            alt={today.iconAlt}
            className='Icons'
          />
        </Stack>
      </Stack>
    </Paper>
  )
}
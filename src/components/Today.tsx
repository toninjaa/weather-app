import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { FullDayWeather } from '../types/DailyWeather';

export default function Today(props: FullDayWeather) {
  const {
    dayIcon,
    dayName,
    dayTemperature,
    dayShortForecast,
  } = props;
  const theme = useTheme();
  let altIcon = "Weather Icon";

  function determineIcon(weather: string, time: string) {
    if (weather.includes("Snow")) {
      altIcon = "Snowflake Icon";
      return './snowflake.svg';
    }
    if (weather.includes("Rain") || weather.includes("Drizzle") || weather.includes("Showers")) {
      altIcon = "Raindrop Icon";
      return './rain.svg';
    }
    if (weather.includes("Sunny")) {
      if (weather.includes("Partly")) {
        altIcon = "Sun With Clouds Icon";
        return './partly_cloudy.svg';
      }
      altIcon = "Sun Icon";
      return './sun.svg';
    }
    if (weather.includes("Cloudy")) {
      if (weather.includes("Partly") && time === "day") {
        altIcon = "Sun With Clouds Icon";
        return './partly_cloudy.svg';
      }
      if (weather.includes("Partly") && time === "night") {
        altIcon = "Moon WIth Clouds Icon"
        return './moon_cloudy.svg';
      }
      altIcon = "Cloud Icon";
      return './cloud.svg';
    }
    if (weather.includes("Clear")) {
      if (time === "day") {
        altIcon = "Sun Icon";
        return './sun.svg';
      }
      if (time === "night") {
        altIcon = "Moon Icon";
        return './moon.svg';
      }
    }
    if (weather.includes("Sleet")) {
      altIcon = "Sleet Icon";
      return './sleet.svg';
    }
  }

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
            {dayName}
          </Typography>
          <Typography>
            Temperature: {dayTemperature}°F
          </Typography>
          <Typography>
            {dayShortForecast}
          </Typography>
        </Stack>  
        <Stack>
          <img
            src={dayIcon}
            alt={dayShortForecast}
          />
        </Stack>
      </Stack>
    </Paper>
  )
}
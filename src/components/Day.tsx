import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { DailyWeather } from '../types/Day';

interface Props {
  d: DailyWeather,
  i: number
  handleDetailClick: (key: number, e: any, time: string) => void, 
}

export default function Day(props: Props) {
  const { d, i, handleDetailClick } = props;
  const theme = useTheme();

  function getMonthAndDay(dayWeather: DailyWeather) {
    const d = new Date(dayWeather.startTime);
    const day = d.getDate();
    const monthNum = d.getMonth();
    const monthsInYear = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthName = monthsInYear[monthNum];
    const date = `${monthName} ${day}`;
    return date;
  }

  return (
    <Paper
    key={i}
    elevation={4}
    sx={{
      width: '8em',
      padding: '.5em',
      backgroundColor: theme.palette.primary.light
    }}
  >
    <Stack
      direction='column'
      alignItems='center'
      justifyContent='space-between'
    >
      <Typography
        variant='h6'
        sx={{ backgroundColor: theme.palette.secondary.dark}}
      >
        {d.name}
        <br/>
        {getMonthAndDay(d)}
      </Typography>
      
      <Typography variant='body1'>
        Temp: {d.temperature}°F
      </Typography>

      <img
        className="Icons"
        src={d.icon}
        alt={d.shortForecast}
      />
      <Typography variant='body1'>
        {d.shortForecast}
      </Typography>

      <Typography variant='body1'>
        Wind Speed: {d.windSpeed}
      </Typography>
      
      <Button
        color='primary'
        variant="contained"
        onClick={(e) => handleDetailClick(i, e, "day")}
      >
        Detailed Forecast
      </Button>
    </Stack>
  </Paper>
  )
}
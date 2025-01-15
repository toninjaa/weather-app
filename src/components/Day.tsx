import { MouseEvent } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { FullDayWeather } from '../types/DailyWeather';

interface Props {
  d: FullDayWeather,
  i: number
  handleDetailClick: (e: MouseEvent<HTMLElement>, d: FullDayWeather) => void, 
}

export default function Day(props: Props) {
  const { d, i, handleDetailClick } = props;
  const theme = useTheme();

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
      
      {d.dayName && (
        <>
          <Typography
            variant='h6'
          >
            {d.dayName}
          </Typography>

            <Typography variant='body1'>
              Temp: {d.dayTemperature}°F
            </Typography>

            <img
              src={d.dayIcon}
              alt={d.dayShortForecast}
            />

            <Typography variant='body1'>
              {d.dayShortForecast}
            </Typography>

            <Typography variant='body1'>
              Wind Speed: {d.dayWindSpeed}
            </Typography>
          </>
        )}

        <Typography
          variant='h6'
          sx={{ backgroundColor: theme.palette.secondary.dark}}
        >
          {d.nightName}
          <br/>
          {/* {getMonthAndDay(d)} */}
        </Typography>
        
        <Typography variant='body1'>
          Temp: {d.nightTemperature}°F
        </Typography>

        <img
          src={d.nightIcon}
          alt={d.nightShortForecast}
        />

        <Typography variant='body1'>
          {d.nightShortForecast}
        </Typography>

        <Typography variant='body1'>
          Wind Speed: {d.nightWindSpeed}
        </Typography>
        
        <Button
          color='primary'
          variant="contained"
          onClick={(e) => handleDetailClick(e, d)}
          sx={{ marginBottom: 0 }}
        >
          Detailed Forecast
        </Button>
      </Stack>
    </Paper>
  )
}
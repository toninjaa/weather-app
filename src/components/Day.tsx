import { MouseEvent } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FullDayWeather } from '../types/Weather';

interface Props {
  d: FullDayWeather,
  i: number
  handleDetailClick: (e: MouseEvent<HTMLElement>, d: FullDayWeather) => void, 
}

export default function Day(props: Props) {
  const { d, i, handleDetailClick } = props;
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up('lg'))
  console.log('bp', window.innerWidth)
  return (
    <Paper
      key={i}
      elevation={4}
      sx={lg ? {
        height: '50em',
        width: '10em',
        padding: '.5em',
        backgroundColor: theme.palette.primary.light
      } : {
        padding: '.5em',
        backgroundColor: theme.palette.primary.light
      }}
    >
      <Stack
        direction={{ md: 'row', lg: 'column' }}
        alignItems='stretch'
        justifyContent='space-evenly'
        spacing={4}
      >
        <Stack
          sx={lg ? {
            height: '20em',
          } : {}}
        >
          <Stack>
            <Typography
              variant='h6'
              color={theme.palette.primary.dark}
            >
              {d.dayName || d.nightName}
            </Typography>
          </Stack>

          <Stack>
            {d.dayName && (
              <>
                <Typography variant='body1'>
                  {d.dayTemperature}°F
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
          </Stack>
        </Stack>

        <Stack
          sx={lg ? {
            height: '20em',
          } : {}}
        >
          <Stack>
            {d.dayName && ( 
              <Typography
                variant='h6'
                color={theme.palette.primary.dark}
              >
                {d.nightName}
              </Typography>
            )}
          </Stack>

          <Stack>
            <Typography variant='body1'>
              {d.nightTemperature}°F
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
          </Stack>
        </Stack>
        
        <Stack
          sx={lg ? {
            height: '3em',
          } : {}}
        >
          <Button
            color='primary'
            variant='contained'
            onClick={(e) => handleDetailClick(e, d)}
            sx={{ marginBottom: 0 }}
          >
            Detailed Forecast
          </Button>
        </Stack>
      </Stack>
    </Paper>
  )
}
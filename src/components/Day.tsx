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
        direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'column' }}
        alignItems={{ xs: 'stretch', sm: 'center', md: 'center', lg: 'stretch' }}
        justifyContent={{ xs: 'center', sm: 'flex-start', md: 'flex-start', lg: 'space-evenly' }}
        spacing={{ sm: 4 }}
      >
        <Stack
          sx={lg ? {
            height: '20em',
          } : { width: '15em' }}
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
                  style={{ maxHeight: '138px', maxWidth: '138px' }}
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
          } : { width: '15em' }}
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
              style={{ maxHeight: '138px', maxWidth: '138px' }}
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
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import DetailedDayContainer from './DetailedDayContainer';
import Day from './Day';
import { DailyWeather } from '../types/Day';

interface Props {
  dayData: DailyWeather[],
  nightData: DailyWeather[],
}

function DayContainer(props: Props) {
  const { dayData, nightData } = props;  
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState({
    name: '',
    detail: '',
    time: '',
  });

  function handleDetailClick(key: number, e: any, time: string) {
    setShowDetail(true);

    if (time === "day") {
      setDetail({
        name: dayData[key].name,
        detail: dayData[key].detailedForecast,
        time: "day",
      });
    }

    if (time === "night") {
      setDetail({
        name: nightData[key].name,
        detail: nightData[key].detailedForecast,
        time: "night",
      });
    }
  }

  function handleDetailClose() {
    setShowDetail(false);
  }

  return (
    <Stack direction='column' alignItems='center' spacing={2}>
      <Stack direction='row' spacing={2}>
        {dayData.map((d: DailyWeather, i: number) => (
          <Day d={d} i={i} handleDetailClick={handleDetailClick}/>
        ))}
      </Stack>

      <Stack direction='row' spacing={2}>
        {nightData.map((n: DailyWeather, i: number) => (
          <Day d={n} i={i} handleDetailClick={handleDetailClick} />
        ))}
      </Stack>

      {showDetail && (
        <DetailedDayContainer
          dayName={detail.name}
          dayData={detail.detail}
          time={detail.time}
          onClose={handleDetailClose}
        />
      )}
    </Stack>
  )
}

export default DayContainer;

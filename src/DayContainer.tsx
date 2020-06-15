import * as React from 'react';

interface Props {
  data: {
    main: {
      feels_like: string,
      grnd_level: string,
      humidity: string,
      pressure: string,
      sea_level: string,
      temp: string,
      temp_kf: string,
      temp_max: string,
      temp_min: string,
    },
    weather: [],
    wind: {
      speed: string,
    }
  },
  idx: number,
}

function DayContainer(props: Props) {
  const { data, idx } = props;
  const cc = data.weather.map((c: any) => {
    return c.description;
  });

  return (
    <React.Fragment key={idx}>
      <h2>Temp: {data.main.temp}</h2>
      <h2>Cloud Cover: {cc}</h2>
      <h2>Wind Speed: {data.wind.speed}</h2>
    </React.Fragment>
  )
}

export default DayContainer;
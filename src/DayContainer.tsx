import * as React from 'react';

interface Props {
  data: {
    clouds: {
      all: string,
    },
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
    return {
      weatherType: c.main,
      weatherDescription: c.description,
      weatherIcon: c.icon,
    };
  });

  return (
    <div key={idx} className="Week-item">
      <h2>Temp: {data.main.temp}</h2>
      {/* <p>{cc[0].weatherIcon}</p> */}
      <h2>
        Main Weather: {cc[0].weatherType}
         - {cc[0].weatherDescription}
      </h2>
      <h2>Cloud Cover: {data.clouds.all}</h2>
      <h2>Wind Speed: {data.wind.speed}</h2>
    </div>
  )
}

export default DayContainer;
import * as React from 'react';
import * as moment from 'moment';

interface Props {
  data: {
    clouds: {
      all: string,
    },
    dt_txt: string,
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

  // TODO: figure out what time zone api data is and convert it to EST
  const dayNameArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const date = new Date(data.dt_txt);
  const dayIndex = date.getDay();
  const dayName = dayNameArray[dayIndex];

  return (
    <div key={idx} className="Week-item">
      <h2 className="Day-header">{dayName}</h2>
      <h2>{cc[0].weatherDescription}</h2>
      <h2 className="Day-item">Temp: {data.main.temp}</h2>
      {/* <p>{cc[0].weatherIcon}</p> */}
      <h2>Cloud Cover: {data.clouds.all}</h2>
      <h2>Wind Speed: {data.wind.speed}</h2>
    </div>
  )
}

export default DayContainer;
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
      <h3>{cc[0].weatherDescription}</h3>
      <h4 className="Day-item">Temp</h4>
        <h5>Actual: {data.main.temp}</h5>
        <h5>Real Feel: {data.main.feels_like}</h5>
        <h5>High: {data.main.temp_max}</h5>
        <h5>Low: {data.main.temp_min}</h5>
      <h4>Cloud Cover: {data.clouds.all}%</h4>
      <h4>Wind Speed: {data.wind.speed}</h4>
    </div>
  )
}

export default DayContainer;
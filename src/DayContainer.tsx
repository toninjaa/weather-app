import * as React from 'react';

interface Props {
  data: any,
  idx: number,
}

function DayContainer(props: Props) {
  const { data, idx } = props;

  // TODO: switch favicon
  // * get both data sets per day in one cell
  // * update CRA docs
  // * improve UX

  // const dayNameArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  // const date = new Date(data.startTime);
  // const dayIndex = date.getDay();
  // const dayName = dayNameArray[dayIndex];

  // TODO: can add onclick to expand detailedForecast
  return (
    <div key={idx} className="Week-item">
      <h2 className="Day-header">{data.name}</h2>
      <img src={data.icon} alt="weather icon" />
      <h3>{data.shortForecast}</h3>
      <h4 className="Day-item">Temp: {data.temperature}</h4>
      <h4>Wind Speed: {data.windSpeed}mph</h4>
    </div>
  )
}

export default DayContainer;
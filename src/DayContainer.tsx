import * as React from 'react';

interface Props {
  dayData: any,
  nightData: any,
  // idx: number,
}

function DayContainer(props: Props) {
  const { dayData, nightData } = props;

  // TODO: switch favicon
  // * get both data sets per day in one cell
  // * update CRA docs
  // * improve UX

  // TODO: can add onclick to expand detailedForecast
  return (
    <>
      {dayData.map((d: any, i: number) => (
        <div key={i} className="Week-item">
          <h2 className="Day-header">{d.name}</h2>
          <img src={d.icon} alt="weather icon" />
          <h3>{d.shortForecast}</h3>
          <h4 className="Day-item">Temp: {d.temperature}</h4>
          <h4>Wind Speed: {d.windSpeed}mph</h4>
        </div>
      ))}

      <br />

      {nightData.map((n: any, i: number) => (
      <div key={i} className="Week-item">
        <h2 className="Day-header">{n.name}</h2>
        <img src={n.icon} alt="weather icon" />
        <h3>{n.shortForecast}</h3>
        <h4 className="Day-item">Temp: {n.temperature}</h4>
        <h4>Wind Speed: {n.windSpeed}mph</h4>
      </div>
      ))}
    </>
  )
}

export default DayContainer;
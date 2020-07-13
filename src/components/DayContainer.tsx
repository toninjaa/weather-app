import * as React from 'react';

interface Props {
  dayData: any,
  nightData: any,
}

function DayContainer(props: Props) {
  const { dayData, nightData } = props;

  // TODO: update readme
  // TODO: improve UX
  // TODO: add date number to day header

  // TODO: can add onclick to expand detailedForecast
  return (
    <>
      {dayData.map((d: any, i: number) => (
        <div key={i} className="Week-item">
          <h2 className="Day-header">{d.name}</h2>
          <img src={d.icon} alt="weather icon" />
          <h3>{d.shortForecast}</h3>
          <h4 className="Day-item">Temp: {d.temperature}°F</h4>
          <h4>Wind Speed: {d.windSpeed}</h4>
        </div>
      ))}

      {nightData.map((n: any, i: number) => (
      <div key={i} className="Week-item">
        <h2 className="Day-header">{n.name}</h2>
        <img src={n.icon} alt="weather icon" />
        <h4 className="Day-item">{n.shortForecast}</h4>
        <h4 className="Day-item">Temp: {n.temperature}°F</h4>
        <h4>Wind Speed: {n.windSpeed}</h4>
      </div>
      ))}
    </>
  )
}

export default DayContainer;
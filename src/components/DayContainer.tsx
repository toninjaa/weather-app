import * as React from 'react';
import { Button } from '@material-ui/core';
import DetailedDayContainer from './DetailedDayContainer';

const { useState } = React;
interface Props {
  dayData: any,
  nightData: any,
}

function DayContainer(props: Props) {
  const { dayData, nightData } = props;
  const [showDetail, setShowDetail] = useState(false);

  // TODO: update readme
  // TODO: improve UX
  // TODO: add date number to day header
  // TODO: can add onclick to expand to detailedForecast and also hourly
  
  function getMonthandDay(dayWeather: any) {
    const d = new Date(dayWeather.startTime);
    const day = d.getDate();
    const monthNum = d.getMonth();
    const monthsInYear = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Spetember', 'October', 'November', 'December'
    ];
    const monthName = monthsInYear[monthNum];
    const date = `${monthName} ${day}`;
    return date;
  }

  function handleDetailClick() {
    setShowDetail(true);
  }

  function handleDetailClose() {
    setShowDetail(false);
  }

  return (
    <>
      {dayData.map((d: any, i: number) => (
        <div key={i} className="Week-item">
          <h2 className="Day-header">
            {d.name}
            <br/>
            {getMonthandDay(d)}
          </h2>
          <img src={d.icon} alt="weather icon" />
          <h3>{d.shortForecast}</h3>
          <h4 className="Day-item">Temp: {d.temperature}°F</h4>
          <h4>Wind Speed: {d.windSpeed}</h4>
          
          <Button onClick={handleDetailClick}>
            Detailed Forecast
          </Button>
          
          {showDetail && (
            <DetailedDayContainer
              dayData={d}
              onClose={handleDetailClose}
            />
          )}
        </div>
      ))}

      {nightData.map((n: any, i: number) => (
      <div key={i} className="Week-item">
        <h2 className="Day-header">
          {n.name}
          <br />
          {getMonthandDay(n)}
        </h2>
        <img src={n.icon} alt="weather icon" />
        <h4 className="Day-item">{n.shortForecast}</h4>
        <h4 className="Day-item">Temp: {n.temperature}°F</h4>
        <h4>Wind Speed: {n.windSpeed}</h4>
        
        <Button onClick={handleDetailClick}>
          Detailed Forecast
        </Button>
        
        {showDetail && (
          <DetailedDayContainer
            dayData={n}
            onClose={handleDetailClose}
          />
        )}
      </div>
      ))}
    </>
  )
}

export default DayContainer;
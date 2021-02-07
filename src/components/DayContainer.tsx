import * as React from 'react';
import { Button } from '@material-ui/core';
import DetailedDayContainer from './DetailedDayContainer';
import DailyWeather from './Day';

const { useState } = React;

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
    
  function getMonthandDay(dayWeather: DailyWeather) {
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

  function handleDetailClick(key: number, e: any, time: string) {
    setShowDetail(true);

    if (time === "day") {
      setDetail({
        name: getMonthandDay(dayData[key]),
        detail: dayData[key].detailedForecast,
        time: "day",
      });
    }

    if (time === "night") {
      setDetail({
        name: getMonthandDay(nightData[key]),
        detail: nightData[key].detailedForecast,
        time: "night",
      });
    }
  }

  function handleDetailClose() {
    setShowDetail(false);
  }

  return (
    <>
      {dayData.map((d: DailyWeather, i: number) => (
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
          
          <Button onClick={(e) => handleDetailClick(i, e, "day")}>
            Detailed Forecast
          </Button>
        </div>
      ))}

      {nightData.map((n: DailyWeather, i: number) => (
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
        
        <Button onClick={(e) => handleDetailClick(i, e, "night")}>
          Detailed Forecast
        </Button>
      </div>
      ))}

      {showDetail && (
        <DetailedDayContainer
          dayName={detail.name}
          dayData={detail.detail}
          time={detail.time}
          onClose={handleDetailClose}
        />
      )}
    </>
  )
}

export default DayContainer;
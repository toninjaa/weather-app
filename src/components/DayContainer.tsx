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

  function determineIcon(weather: string, time: string) {
    if (weather.includes("Snow")) {
      return "/snowflake.svg";
    }
    if (weather.includes("Rain")) {
      return "/rain.svg";
    }
    if (weather.includes("Sunny")) {
      if (weather.includes("Partly")) {
        return "/partly_cloudy.svg";
      }
      return "/sun.svg";
    }
    if (weather.includes("Cloudy")) {
      if (weather.includes("Partly") && time === "day") {
        return "/partly_cloudy.svg";
      }
      if (weather.includes("Partly") && time === "night") {
        return "/moon_cloudy.svg";
      }
      return "/cloud.svg";
    }
    if (weather.includes("Sleet")) {
      return "/sleet.svg";
    }
    if (weather.includes("Drizzle")) {
      return "/rain.svg";
    }
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
          <img
            className="Icons"
            src={determineIcon(d.shortForecast, "day")}
            alt="weather icon"
          />
          <h3>{d.shortForecast}</h3>
          <h4 className="Day-item">Temp: {d.temperature}°F</h4>
          <h4>Wind Speed: {d.windSpeed}</h4>
          
          <Button
            variant="contained"
            onClick={(e) => handleDetailClick(i, e, "day")}
          >
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
        <img
          className="Icons"
          src={determineIcon(n.shortForecast, "night")}
          alt="weather icon"
        />
        <h4 className="Day-item">{n.shortForecast}</h4>
        <h4 className="Day-item">Temp: {n.temperature}°F</h4>
        <h4>Wind Speed: {n.windSpeed}</h4>
        
        <Button
          variant="contained"
          onClick={(e) => handleDetailClick(i, e, "night")}
        >
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

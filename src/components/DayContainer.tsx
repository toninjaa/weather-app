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
  let altIcon = "Weather Icon";
    
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
      altIcon = "Snowflake Icon";
      return './weather-app/snowflake.svg';
    }
    if (weather.includes("Rain")) {
      altIcon = "Raindrop Icon";
      return './weather-app/rain.svg';
    }
    if (weather.includes("Sunny")) {
      if (weather.includes("Partly")) {
        altIcon = "Sun With Clouds Icon";
        return './weather-app/partly_cloudy.svg';
      }
      altIcon = "Sun Icon";
      return './weather-app/sun.svg';
    }
    if (weather.includes("Cloudy")) {
      if (weather.includes("Partly") && time === "day") {
        altIcon = "Sun With Clouds Icon";
        return './weather-app/partly_cloudy.svg';
      }
      if (weather.includes("Partly") && time === "night") {
        altIcon = "Moon WIth Clouds Icon"
        return './weather-app/moon_cloudy.svg';
      }
      altIcon = "Cloud Icon";
      return './weather-app/cloud.svg';
    }
    if (weather.includes("Clear")) {
      if (time === "day") {
        altIcon = "Sun Icon";
        return './weather-app/sun.svg';
      }
      if (time === "night") {
        altIcon = "Moon Icon";
        return './weather-app/moon.svg';
      }
    }
    if (weather.includes("Sleet")) {
      altIcon = "Sleet Icon";
      return './weather-app/sleet.svg';
    }
    if (weather.includes("Drizzle")) {
      altIcon = "Raindrop Icon";
      return './weather-app/rain.svg';
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
            alt={altIcon}
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
          alt={altIcon}
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

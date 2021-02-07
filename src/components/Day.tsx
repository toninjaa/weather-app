interface DailyWeather {
  detailedForecast: string,
  endTime: string,
  icon: string,
  isDaytime: boolean,
  name: string,
  number: number,
  shortForecast: string,
  startTime: string,
  temperature: number,
  temperatureTrend: any,
  temperatureUnit: string,
  windDirection: string,
  windSpeed: string,
}

export default DailyWeather;
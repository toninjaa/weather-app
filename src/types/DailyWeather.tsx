export interface DailyWeather {
  detailedForecast: string,
  endTime: string,
  icon: string,
  isDaytime: boolean,
  name: string,
  number: number,
  probabilityOfPrecipitation: { unitCode: string, value: number },
  shortForecast: string,
  startTime: string,
  temperature: number,
  temperatureTrend: any,
  temperatureUnit: string,
  windDirection: string,
  windSpeed: string,
}

export interface FullDayWeather {
  dayDetailedForecast: string,
  dayIcon: string,
  dayName: string,
  dayProbabilityOfPrecipitation: { unitCode: string, value: number },
  dayShortForecast: string,
  dayTemperature: number,
  dayWindSpeed: string,
  nightDetailedForecast: string,
  nightIcon: string,
  nightName: string,
  nightProbabilityOfPrecipitation: { unitCode: string, value: number },
  nightShortForecast: string,
  nightTemperature: number,
  nightWindSpeed: string,
}

// Example response from weather API
/*
  "periods": [
    {
      "number": 1,
      "name": "Today",
      "startTime": "2025-01-07T09:00:00-09:00",
      "endTime": "2025-01-07T18:00:00-09:00",
      "isDaytime": true,
      "temperature": 24,
      "temperatureUnit": "F",
      "temperatureTrend": "",
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": 90
      },
      "windSpeed": "10 to 15 mph",
      "windDirection": "S",
      "icon": "https://api.weather.gov/icons/land/day/snow,90/snow,80?size=medium",
      "shortForecast": "Light Snow",
      "detailedForecast": "Snow. Cloudy, with a high near 24. South wind 10 to 15 mph. Chance of precipitation is 90%. New snow accumulation of 1 to 3 inches possible."
    },
    {
      "number": 2,
      "name": "Tonight",
      "startTime": "2025-01-07T18:00:00-09:00",
      "endTime": "2025-01-08T06:00:00-09:00",
      "isDaytime": false,
      "temperature": 26,
      "temperatureUnit": "F",
      "temperatureTrend": "",
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": 70
      },
      "windSpeed": "10 mph",
      "windDirection": "S",
      "icon": "https://api.weather.gov/icons/land/night/snow,70/snow,60?size=medium",
      "shortForecast": "Light Snow Likely",
      "detailedForecast": "Snow likely. Mostly cloudy, with a low around 26. South wind around 10 mph. Chance of precipitation is 70%. New snow accumulation of 1 to 2 inches possible."
    },
    {
      "number": 3,
      "name": "Wednesday",
      "startTime": "2025-01-15T06:00:00-09:00",
      "endTime": "2025-01-15T18:00:00-09:00",
      "isDaytime": true,
      "temperature": 9,
      "temperatureUnit": "F",
      "temperatureTrend": "",
      "probabilityOfPrecipitation": {
        "unitCode": "wmoUnit:percent",
        "value": null
      },
      "windSpeed": "5 mph",
      "windDirection": "NE",
      "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
      "shortForecast": "Mostly Sunny",
      "detailedForecast": "Mostly sunny. High near 9, with temperatures falling to around 4 in the afternoon. Northeast wind around 5 mph."
    },
  ]
*/
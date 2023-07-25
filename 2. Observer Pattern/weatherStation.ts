import { CurrentConditionsDisplay } from './currentConditionsDisplay';
import { ForecastDisplay } from './forecastDisplay';
import { HeatIndexDisplay } from './heatIndexDisplay';
import { StatisticsDisplay } from './statisticsDisplay';
import { WeatherData } from './weatherData';

class WeatherStation {
  constructor() {
    const weatherData = new WeatherData();

    const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
    const statisticDisplay = new StatisticsDisplay(weatherData);
    const forecastDisplay = new ForecastDisplay(weatherData);
    const heatIndexDisplay = new HeatIndexDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.setMeasurements(78, 90, 29.2);
  }
}

new WeatherStation();

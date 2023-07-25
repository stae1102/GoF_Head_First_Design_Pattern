import { DisplayElement } from './displayElement';
import { Observer } from './observer';
import { WeatherData } from './weatherData';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number;
  private humidity: number;
  private weatherData: WeatherData; // 주제의 레퍼런스를 저장하기 위함

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(): void {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }

  public display(): void {
    console.log(`현재 상태: 온도 ${this.temperature}F, 습도 ${this.humidity}%`);
  }
}

import { Observer } from './observer';
import { DisplayElement } from './displayElement';
import { WeatherData } from './weatherData';

export class ForecastDisplay implements Observer, DisplayElement {
  private currentPressure: number = 29.92;
  private lastPressure: number;
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  public update(
    _temperature: number,
    _humidity: number,
    pressure: number
  ): void {
    this.lastPressure = this.currentPressure;
    this.currentPressure = pressure;

    this.display();
  }

  public display(): void {
    console.log('기상 예보: ');

    if (this.currentPressure > this.lastPressure) {
      console.log('날씨가 좋아지고 있습니다!');
    }

    if (this.currentPressure === this.lastPressure) {
      console.log('지금과 비슷할 것 같습니다.');
    }

    if (this.currentPressure < this.lastPressure) {
      console.log('쌀쌀하며 비가 올 것 같습니다.');
    }
  }
}

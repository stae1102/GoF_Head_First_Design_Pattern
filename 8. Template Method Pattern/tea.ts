import { CaffeinBeverage } from './caffeinBeverage';

export class Tea extends CaffeinBeverage {
  public brew(): void {
    console.log('찻잎을 우려내는 중');
  }

  public addCondiments(): void {
    console.log('레몬을 추가하는 중');
  }
}

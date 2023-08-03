import { CaffeinBeverage } from './caffeinBeverage';

export class Coffee extends CaffeinBeverage {
  brew(): void {
    console.log('필터로 커피를 우려내는 중');
  }

  addCondiments(): void {
    console.log('설탕과 우유를 추가하는 중');
  }
}

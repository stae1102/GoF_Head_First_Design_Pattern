import { Beverage } from './beverage';

export class Decaf extends Beverage {
  constructor() {
    super();
    this.description = '디카페인 커피';
  }

  public cost(): number {
    return 1.05;
  }
}

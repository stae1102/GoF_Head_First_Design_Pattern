import { Beverage } from './beverage';
import { CondimentDecorator } from './condimentDecorator';

export class Milk extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', 우유';
  }

  public cost(): number {
    return this.beverage.cost() + 0.1;
  }
}

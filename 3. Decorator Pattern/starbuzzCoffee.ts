import { Beverage } from './beverage';
import { DarkRoast } from './darkRoast';
import { Espresso } from './espresso';
import { HouseBlend } from './houseBlend';
import { Mocha } from './mocha';
import { Soy } from './soy';
import { Whip } from './whip';

class StarBuzzCoffee {
  constructor() {
    const beverage: Beverage = new Espresso();
    console.log(`${beverage.getDescription()} $${beverage.cost()}`);

    let beverage2: Beverage = new DarkRoast();
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);

    let beverage3: Beverage = new HouseBlend();
    beverage3 = new Soy(beverage3);
    beverage3 = new Mocha(beverage3);
    beverage3 = new Whip(beverage3);
    console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);
  }
}

new StarBuzzCoffee();

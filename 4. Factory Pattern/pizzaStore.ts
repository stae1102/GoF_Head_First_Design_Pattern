import { Pizza } from './pizza';
import { SimplePizzaFactory } from './simplePizzaFactory';

export class PizzaStore {
  factory: SimplePizzaFactory;

  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  public orderPizza(type: string): Pizza {
    const pizza: Pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

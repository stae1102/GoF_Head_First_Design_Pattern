import { CheesePizza } from './cheesePizza';
import { ClamPizza } from './clamPizza';
import { PepperoniPizza } from './pepperoniPizza';
import { Pizza } from './pizza';
import { VeggiePizza } from './veggiePizza';

export class SimplePizzaFactory {
  public createPizza(type: string): Pizza {
    let pizza: Pizza = new Object() as Pizza;

    if (type === 'cheese') {
      pizza = new CheesePizza();
    } else if (type === 'pepperoni') {
      pizza = new PepperoniPizza();
    } else if (type === 'clam') {
      pizza = new ClamPizza();
    } else if (type === 'veggie') {
      pizza = new VeggiePizza();
    }

    return pizza;
  }
}

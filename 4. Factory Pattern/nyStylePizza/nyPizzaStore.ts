import { Pizza } from '../pizza';
import { PizzaStore } from '../pizzaStore';
import { NYStyleCheesePizza } from './nyStyleCheesePizza';
import { NYStyleClamPizza } from './nyStyleClamPizza';
import { NYStylePepperoniPizza } from './nyStylePepperoniPizza';
import { NYStyleVeggiePizza } from './nyStyleVeggiePizza';

export class NYPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza | null {
    if (type === 'cheese') {
      return new NYStyleCheesePizza();
    } else if (type === 'veggie') {
      return new NYStyleVeggiePizza();
    } else if (type === 'clam') {
      return new NYStyleClamPizza();
    } else if (type === 'pepperoni') {
      return new NYStylePepperoniPizza();
    } else {
      return null;
    }
  }
}

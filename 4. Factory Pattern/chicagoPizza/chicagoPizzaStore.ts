import { Pizza } from '../pizza';
import { PizzaStore } from '../pizzaStore';

export class ChicagoPizzaStore extends PizzaStore {
  public createPizza(type: string): Pizza | null {
    if (type === 'cheese') {
      return new ChicagoStyleCheesePizza();
    } else if (type === 'veggie') {
      return new ChicagoStyleVeggiePizza();
    } else if (type === 'clam') {
      return new ChicagoStyleClamPizza();
    } else if (type === 'pepperoni') {
      return new ChicagoStylePepperoniPizza();
    } else {
      return null;
    }
  }
}

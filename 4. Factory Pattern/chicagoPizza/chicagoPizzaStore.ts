import { Pizza } from '../pizza';
import { PizzaStore } from '../pizzaStore';
import { ChicagoStyleCheesePizza } from './chicagoStyleCheesePizza';
import { ChicagoStyleVeggiePizza } from './chicagoStyleVeggiePizza';
import { ChicagoStyleClamPizza } from './chicagoStyleClamPizza';
import { ChicagoStylePepperoniPizza } from './chicagoStylePepperoniPizza';

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

import { ChicagoPizzaStore } from './chicagoPizza/chicagoPizzaStore';
import { NYPizzaStore } from './nyStylePizza/nyPizzaStore';
import { PizzaStore } from './pizzaStore';

class PizzaTestDrive {
  constructor() {
    const nyStore: PizzaStore = new NYPizzaStore();
    const chicagoStore: ChicagoPizzaStore = new ChicagoPizzaStore();

    let pizza = nyStore.orderPizza('cheese');
    console.log(`에단이 주문한 ${pizza?.getName()}`);

    pizza = chicagoStore.orderPizza('cheese');
    console.log(`조엘이 주문한 ${pizza?.getName()}`);
  }
}

new PizzaTestDrive();

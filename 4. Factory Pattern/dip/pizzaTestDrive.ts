import { ChicagoPizzaStore } from './chicagoPizzaStore';
import { NYPizzaStore } from './nyPizzaStore';
import { PizzaStore } from './pizzaStore';

const nyPizzaStore: PizzaStore = new NYPizzaStore();

nyPizzaStore.orderPizza('cheese');

const chicagoPizzaStore: PizzaStore = new ChicagoPizzaStore();

chicagoPizzaStore.orderPizza('cheese');

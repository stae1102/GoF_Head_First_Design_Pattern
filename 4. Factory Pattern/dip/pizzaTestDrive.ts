import { NYPizzaStore } from './nyPizzaStore';
import { PizzaStore } from './pizzaStore';

const pizzaStore: PizzaStore = new NYPizzaStore();

pizzaStore.orderPizza('cheese');

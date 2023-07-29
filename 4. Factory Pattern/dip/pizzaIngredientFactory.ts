import { Cheese } from './cheese';
import { Clams } from './clams';
import { Dough } from './dough';
import { Pepperoni } from './pepperoni';
import { Sauce } from './sauce';
import { Veggies } from './veggies';

export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clams;
}

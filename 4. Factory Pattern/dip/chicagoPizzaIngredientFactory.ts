import { BlackOlives } from './blackOlives';
import { Cheese } from './cheese';
import { Clams } from './clams';
import { Dough } from './dough';
import { Eggplant } from './eggplant';
import { FrozenClams } from './frozenClams';
import { MozzarellaCheese } from './mozzarellaCheese';
import { Pepperoni } from './pepperoni';
import { PizzaIngredientFactory } from './pizzaIngredientFactory';
import { PlumTomatoSauce } from './plumTomatoSauce';
import { Sauce } from './sauce';
import { SlicedPepperoni } from './slicedPepperoni';
import { Spinach } from './spinach';
import { ThickCrustDough } from './thickCrustDough';
import { Veggies } from './veggies';

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  public createDough(): Dough {
    return new ThickCrustDough();
  }

  public createSauce(): Sauce {
    return new PlumTomatoSauce();
  }

  public createCheese(): Cheese {
    return new MozzarellaCheese();
  }

  public createVeggies(): Veggies[] {
    const veggies: Veggies[] = [
      new BlackOlives(),
      new Spinach(),
      new Eggplant(),
    ];
    return veggies;
  }

  public createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  public createClam(): Clams {
    return new FrozenClams();
  }
}

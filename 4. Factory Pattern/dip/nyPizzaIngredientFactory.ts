import { Cheese } from './cheese';
import { Clams } from './clams';
import { Dough } from './dough';
import { FreshClams } from './freshClams';
import { Garlic } from './garlic';
import { MarinaraSauce } from './marinaraSauce';
import { Mushroom } from './mushroom';
import { Onion } from './onion';
import { Pepperoni } from './pepperoni';
import { PizzaIngredientFactory } from './pizzaIngredientFactory';
import { RedPepper } from './redPepper';
import { ReggianoCheese } from './reggianoCheese';
import { Sauce } from './sauce';
import { SlicedPepperoni } from './slicedPepperoni';
import { ThinCrustDough } from './thinCrustDough';
import { Veggies } from './veggies';

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  public createDough(): Dough {
    return new ThinCrustDough();
  }

  public createSauce(): Sauce {
    return new MarinaraSauce();
  }

  public createCheese(): Cheese {
    return new ReggianoCheese();
  }

  public createVeggies(): Veggies[] {
    const veggies: Veggies[] = [
      new Garlic(),
      new Onion(),
      new Mushroom(),
      new RedPepper(),
    ];
    return veggies;
  }

  public createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  public createClam(): Clams {
    return new FreshClams();
  }
}

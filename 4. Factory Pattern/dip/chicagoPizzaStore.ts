import { CheesePizza } from './cheesePizza';
import { ClamPizza } from './clamPizza';
import { PepperoniPizza } from './pepperoniPizza';
import { Pizza } from './pizza';
import { VeggiePizza } from './veggiePizza';
import { ChicagoPizzaIngredientFactory } from './chicagoPizzaIngredientFactory';
import { PizzaIngredientFactory } from './pizzaIngredientFactory';
import { PizzaStore } from './pizzaStore';

export class ChicagoPizzaStore extends PizzaStore {
  public createPizza(item: string): Pizza | null {
    let pizza = null;
    const ingredientFactory: PizzaIngredientFactory =
      new ChicagoPizzaIngredientFactory();

    if (item === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('시카고 스타일 치즈 피자');
    } else if (item === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('시카고 스타일 야채 피자');
    } else if (item === 'clam') {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('시카고 스타일 조개 피자');
    } else if (item === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('시카고 스타일 페퍼로니 피자');
    }

    return pizza;
  }
}

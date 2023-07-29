import { PizzaStore } from './pizzaStore';
import { Pizza } from './pizza';
import { PizzaIngredientFactory } from './pizzaIngredientFactory';
import { NYPizzaIngredientFactory } from './nyPizzaIngredientFactory';
import { CheesePizza } from './cheesePizza';
import { VeggiePizza } from './veggiePizza';
import { ClamPizza } from './clamPizza';
import { PepperoniPizza } from './pepperoniPizza';

export class NYPizzaStore extends PizzaStore {
  protected createPizza(item: string): Pizza | null {
    let pizza = null;
    const ingredientFactory: PizzaIngredientFactory =
      new NYPizzaIngredientFactory();

    if (item === 'cheese') {
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName('뉴욕 스타일 치즈 피자');
    } else if (item === 'veggie') {
      pizza = new VeggiePizza(ingredientFactory);
      pizza.setName('뉴욕 스타일 야채 피자');
    } else if (item === 'clam') {
      pizza = new ClamPizza(ingredientFactory);
      pizza.setName('뉴욕 스타일 조개 피자');
    } else if (item === 'pepperoni') {
      pizza = new PepperoniPizza(ingredientFactory);
      pizza.setName('뉴욕 뉴욕 스타일 페퍼로니 피자');
    }

    return pizza;
  }
}

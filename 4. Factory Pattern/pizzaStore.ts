import { Pizza } from './pizza';

export abstract class PizzaStore {
  public orderPizza(type: string): Pizza | null {
    const pizza: Pizza | null = this.createPizza(type);

    pizza?.prepare();
    pizza?.bake();
    pizza?.cut();
    pizza?.box();

    return pizza;
  }

  protected abstract createPizza(type: string): Pizza | null;
}

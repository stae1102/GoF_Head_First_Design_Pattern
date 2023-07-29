import { Pizza } from './pizza';

export abstract class PizzaStore {
  protected abstract createPizza(item: string): Pizza | null;

  public orderPizza(type: string): Pizza | null {
    const pizza: Pizza | null = this.createPizza(type);
    console.log(`--- Making a ${pizza?.getName()} ---`);
    pizza?.prepare();
    pizza?.bake();
    pizza?.cut();
    pizza?.box();
    return pizza;
  }
}

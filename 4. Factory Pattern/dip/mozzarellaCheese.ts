import { Cheese } from './cheese';

export class MozzarellaCheese implements Cheese {
  public toString(): string {
    return 'Shredded Mozzarella';
  }
}

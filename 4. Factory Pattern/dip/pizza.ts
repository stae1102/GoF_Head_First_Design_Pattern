import { Cheese } from './cheese';
import { Clams } from './clams';
import { Dough } from './dough';
import { Pepperoni } from './pepperoni';
import { Sauce } from './sauce';
import { Veggies } from './veggies';

export abstract class Pizza {
  name: string;

  dough: Dough;
  sauce: Sauce;
  veggies: Veggies[];
  cheese: Cheese;
  pepperoni: Pepperoni;
  clam: Clams;

  abstract prepare(): void;

  bake(): void {
    console.log('175도에서 25분 간 굽기');
  }

  cut(): void {
    console.log('피자를 사선으로 자르기');
  }

  box(): void {
    console.log('상자에 피자 담기');
  }

  setName(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  public toString() {}
}

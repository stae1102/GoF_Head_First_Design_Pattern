import { Pizza } from './pizza';

export class CheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Cheese Pizza';
    this.dough = 'Regular Crust';
    this.sauce = 'Marinara Pizza Sauce';
    this.toppings.push('Fresh Mozzarella');
    this.toppings.push('Parmesan');
  }
}

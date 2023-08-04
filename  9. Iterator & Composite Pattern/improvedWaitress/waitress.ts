import { Menu } from './menu';
import { MenuItem } from './menuItem';

export class Waitress {
  pancakeHouseMenu: Menu;
  dinerMenu: Menu;
  cafeMenu: Menu;
  menus: Menu[];

  public constructor(...menus: Menu[]) {
    this.menus = menus;
  }

  public printMenu(): void {
    const menuIterator: IterableIterator<Menu> = this.menus[Symbol.iterator]();

    let iteration = menuIterator.next();

    while (!iteration.done && iteration.value !== undefined) {
      this._printMenu(iteration.value.createIterator());
      iteration = menuIterator.next();
    }
  }

  private _printMenu(iterator: Iterator<MenuItem>): void {
    let iteration = iterator.next();
    while (!iteration.done && iteration.value !== undefined) {
      const menuItem = iteration.value;

      console.log(
        `${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`
      );

      iteration = iterator.next();
    }
  }
}

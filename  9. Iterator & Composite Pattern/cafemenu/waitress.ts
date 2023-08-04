import { Menu } from './menu';
import { MenuItem } from './menuItem';

export class Waitress {
  pancakeHouseMenu: Menu;
  dinerMenu: Menu;
  cafeMenu: Menu;

  public constructor(pancakeHouseMenu: Menu, dinerMenu: Menu, cafeMenu: Menu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
    this.cafeMenu = cafeMenu;
  }

  public printMenu(): void {
    const pancakeIterator: Iterator<MenuItem> =
      this.pancakeHouseMenu.createIterator();
    const dinerIterator: Iterator<MenuItem> = this.dinerMenu.createIterator();
    const cafeIterator: Iterator<MenuItem> = this.cafeMenu.createIterator();

    console.log('메뉴\n----\n아침 메뉴');
    this._printMenu(pancakeIterator);
    console.log('\n점심 메뉴');
    this._printMenu(dinerIterator);
    console.log('\n저녁 메뉴');
    this._printMenu(cafeIterator);
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

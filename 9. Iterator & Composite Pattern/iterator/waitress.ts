import { DinerMenu } from './dinerMenu';
import { Iterator } from './iterator';
import { PancakeHouseMenu } from './pancakeHouseMenu';

export class Waitress {
  pancakeHouseMenu: PancakeHouseMenu;
  dinerMenu: DinerMenu;

  public constructor(pancakeHouseMenu: PancakeHouseMenu, dinerMenu: DinerMenu) {
    this.pancakeHouseMenu = pancakeHouseMenu;
    this.dinerMenu = dinerMenu;
  }

  public printMenu(): void {
    const pancakeIterator: Iterator = this.pancakeHouseMenu.createIterator();
    const dinerIterator: Iterator = this.dinerMenu.createIterator();

    console.log('메뉴\n----\n아침 메뉴');
    this._printMenu(pancakeIterator);
    console.log('\n점심 메뉴');
    this._printMenu(dinerIterator);
  }

  private _printMenu(iterator: Iterator): void {
    while (iterator.hasNext()) {
      const menuItem = iterator.next();
      console.log(
        `${menuItem.getName()}, ${menuItem.getPrice()} -- ${menuItem.getDescription()}`
      );
    }
  }
}

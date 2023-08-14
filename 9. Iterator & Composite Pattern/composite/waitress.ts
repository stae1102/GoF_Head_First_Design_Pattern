import { MenuComponent } from './menuComponent';

export class Waitress {
  allMenus: MenuComponent;

  public constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  public printMenu(): void {
    this.allMenus.print();
  }
}

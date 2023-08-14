import { Menu } from './menu';
import { MenuItem } from './menuItem';

export class CafeMenu implements Menu {
  menuItems: Map<string, MenuItem> = new Map<string, MenuItem>();

  public constructor() {
    this.addItem(
      '베지 버거와 에어 프라이',
      '통밀빵, 상추, 토마토, 감자 튀김이 첨가된 베지 버거',
      true,
      3.99
    );
    this.addItem('오늘의 스프', '샐러드가 곁들여진 오늘의 스프', false, 3.69);
    this.addItem(
      '부리토',
      '통 핀토콩과 살사, 구아카몰이 곁들여진 푸짐한 부리토',
      true,
      4.29
    );
  }

  public addItem(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ): void {
    const menuItem: MenuItem = new MenuItem(
      name,
      description,
      vegetarian,
      price
    );
    this.menuItems.set(name, menuItem);
  }

  public createIterator(): Iterator<MenuItem> {
    return this.menuItems.values()[Symbol.iterator]();
  }
}

import { Iterator } from './iterator';
import { MenuItem } from './menuItem';
import { PancakeHouseMenuIterator } from './pancakeHouseMenuIterator';

export class PancakeHouseMenu {
  menuItems: MenuItem[];

  public constructor() {
    this.menuItems = new Array<MenuItem>();

    this.addItems(
      'K&B 팬케이크 세트',
      '스크램블 에그와 토스트가 곁들여진 팬케이크',
      true,
      2.99
    );

    this.addItems(
      '레귤러 팬케이크 세트',
      '달걀 프라이와 소시지가 곁들여진 팬케이크',
      false,
      2.99
    );

    this.addItems(
      '블루베리 팬케이크',
      '신선한 블루베리와 블루베리 시럽으로 만든 팬케이크',
      true,
      3.49
    );

    this.addItems(
      '와플',
      '취향에 따라 블루베리나 딸기를 얹을 수 있는 와플',
      true,
      3.59
    );
  }

  public addItems(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    const menuItem: MenuItem = new MenuItem(
      name,
      description,
      vegetarian,
      price
    );
    this.menuItems.push(menuItem);
  }

  public createIterator(): Iterator {
    return new PancakeHouseMenuIterator(this.menuItems);
  }
}

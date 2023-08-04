import { MenuItem } from './menuItem';

export class DinerMenu {
  static MAX_ITEMS: number = 6;
  numberOfItems: number = 0;
  menuItems: MenuItem[];

  public constructor() {
    this.menuItems = new Array<MenuItem>(DinerMenu.MAX_ITEMS);

    this.addItems(
      '채식주의자용 BLT',
      '통밀 위에 콩고기 베이컨, 상추, 토마토를 얹은 메뉴',
      true,
      2.99
    );

    this.addItems(
      'BLT',
      '통밀 위에 베이컨, 상추, 토마토를 얹은 메뉴',
      false,
      2.99
    );

    this.addItems(
      '오늘의 스프',
      '감자 샐러드를 곁들인 오늘의 스프',
      false,
      3.29
    );

    this.addItems(
      '핫도그',
      '사워크라우트, 갖은 양념, 양파, 치즈가 곁들여진 핫도그',
      false,
      3.05
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
    if (this.numberOfItems > DinerMenu.MAX_ITEMS) {
      console.error(
        '죄송합니다, 메뉴가 꽉 찼습니다. 더 이상 추가할 수 없습니다.'
      );
    } else {
      this.menuItems[this.numberOfItems] = menuItem;
      this.numberOfItems++;
    }
  }

  public getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}

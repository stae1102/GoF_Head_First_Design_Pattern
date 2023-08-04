import { Iterator } from './iterator';
import { MenuItem } from './menuItem';

export class PancakeHouseMenuIterator implements Iterator {
  items: MenuItem[];
  position: number = 0;

  public constructor(items: MenuItem[]) {
    this.items = items;
  }

  public next(): MenuItem {
    const menuItem = this.items[this.position];
    this.position++;
    return menuItem;
  }

  public hasNext(): boolean {
    if (
      this.position >= this.items.length ||
      this.items[this.position] === null
    ) {
      return false;
    }
    return true;
  }
}

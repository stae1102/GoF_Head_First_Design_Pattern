import { MenuItem } from './menuItem';

export interface Menu {
  createIterator(): Iterator<MenuItem>;
}

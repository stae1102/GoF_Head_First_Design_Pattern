import { CafeMenu } from './cafeMenu';
import { DinerMenu } from './dinerMenu';
import { PancakeHouseMenu } from './pancakeHouseMenu';
import { Waitress } from './waitress';

const pancakeHouseMenu: PancakeHouseMenu = new PancakeHouseMenu();
const dinerMenu: DinerMenu = new DinerMenu();
const cafeMenu: CafeMenu = new CafeMenu();

const waitress: Waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu);
waitress.printMenu();

import { DinerMenu } from './dinerMenu';
import { PancakeHouseMenu } from './pancakeHouseMenu';
import { Waitress } from './waitress';

const pancakeHouseMenu: PancakeHouseMenu = new PancakeHouseMenu();
const dinerMenu: DinerMenu = new DinerMenu();

const waitress: Waitress = new Waitress(pancakeHouseMenu, dinerMenu);
waitress.printMenu();

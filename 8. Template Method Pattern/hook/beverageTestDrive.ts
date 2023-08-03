import { CoffeeWithHook } from './coffeeWithHook';
import { TeaWithHook } from './teaWithHook';

const teaHook = new TeaWithHook();
const coffeeHook = new CoffeeWithHook();

console.log('\n홍차 준비 중...');
teaHook.prepareRecipe();

console.log('\n커피 준비 중...');
coffeeHook.prepareRecipe();

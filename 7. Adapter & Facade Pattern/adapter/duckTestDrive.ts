import { Duck } from './duck';
import { MallardDuck } from './mallardDuck';
import { Turkey } from './turkey';
import { TurkeyAdapter } from './turkeyAdapter';
import { WildTurkey } from './wildTurkey';

const duck: Duck = new MallardDuck();

const turkey: Turkey = new WildTurkey();
const turkeyAdapter: Duck = new TurkeyAdapter(turkey);

const testDuck = (duck: Duck): void => {
  duck.quack();
  duck.fly();
};

console.log('칠면조가 말하길');
turkey.gobble();
turkey.fly();

console.log('\n오리가 말하길');
testDuck(duck);

console.log('\n칠면조 어댑터가 말하길');
testDuck(turkeyAdapter);

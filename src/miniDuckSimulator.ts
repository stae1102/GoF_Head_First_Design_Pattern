import { MallardDuck } from './mallardDuck';

class MiniDuckSimulator {
  constructor() {
    const mallardDuck = new MallardDuck();
    mallardDuck.performQuack();
    mallardDuck.performFly();
  }
}

new MiniDuckSimulator();

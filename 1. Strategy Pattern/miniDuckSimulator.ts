import { Duck } from './duck';
import { MallardDuck } from './mallardDuck';
import { ModelDuck } from './modelDuck';
import { FlyRocketPowered } from './flyRocketPowered';

class MiniDuckSimulator {
  constructor() {
    const mallardDuck: Duck = new MallardDuck();
    mallardDuck.performQuack();
    mallardDuck.performFly();

    const model: Duck = new ModelDuck();
    model.performFly();
    model.flyBehavior = new FlyRocketPowered();
    model.performFly();
  }
}

new MiniDuckSimulator();

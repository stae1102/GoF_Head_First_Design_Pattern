import { Duck } from './duck';
import { FlyWithWings } from './flyWithWings';
import { Quack } from './quack';

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  public display(): void {
    console.log('저는 물오리 입니다.');
  }
}

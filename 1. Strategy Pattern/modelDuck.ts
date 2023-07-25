import { Duck } from './duck';
import { FlyNoWay } from './flyNoWay';
import { Quack } from './quack';

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log('저는 모형 오리입니다.');
  }
}

import { Duck } from 'src/duck';
import { FlyNoWay } from 'src/flyNoWay';
import { Quack } from 'src/quack';

class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log('저는 모형 오리입니다.');
  }
}

import { Quackable } from './quackable';

export class MallardDuck implements Quackable {
  public quack(): void {
    console.log('꽥꽥');
  }
}

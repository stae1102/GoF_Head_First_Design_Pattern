import { Quackable } from './quackable';

export class RedheadDuck implements Quackable {
  public quack(): void {
    console.log('꽥꽥');
  }
}

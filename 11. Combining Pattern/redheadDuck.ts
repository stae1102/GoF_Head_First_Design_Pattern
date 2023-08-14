import { Quackable } from './quackable';

export class RedHeadDuck implements Quackable {
  public quack(): void {
    console.log('꽥꽥');
  }
}

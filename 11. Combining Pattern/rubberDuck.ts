import { Quackable } from './quackable';

export class RubberDuck implements Quackable {
  public quack(): void {
    console.log('삑삑');
  }
}

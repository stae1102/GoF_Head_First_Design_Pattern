import { QuackBehavior } from './quackBehavior';

export class Squeak implements QuackBehavior {
  public quack(): void {
    console.log('삑');
  }
}

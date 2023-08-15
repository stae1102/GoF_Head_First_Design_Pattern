import { Observer } from './observer';
import { Quackable } from './quackable';

export class Flock implements Quackable {
  ducks: Quackable[] = new Array<Quackable>();

  public add(duck: Quackable): void {
    this.ducks.push(duck);
  }

  public quack(): void {
    for (const duck of this.ducks) {
      duck.quack();
    }
  }

  public registerObserver(observer: Observer): void {
    for (const duck of this.ducks) {
      duck.registerObserver(observer);
    }
  }

  public notifyObservers(): void {}
}

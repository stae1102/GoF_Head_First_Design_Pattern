import { Goose } from './goose';
import { Observable } from './observable';
import { Observer } from './observer';
import { Quackable } from './quackable';

export class GooseAdapter implements Quackable {
  observable: Observable;
  goose: Goose;

  constructor(goose: Goose) {
    this.goose = goose;
    this.observable = new Observable(this);
  }

  public quack(): void {
    this.goose.honk();
    this.notifyObservers();
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }

  public notifyObservers(): void {
    this.observable.notifyObservers();
  }
}

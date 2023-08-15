import { Observable } from './observable';
import { Observer } from './observer';
import { Quackable } from './quackable';

export class MallardDuck implements Quackable {
  observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  public quack(): void {
    console.log('꽥꽥');
    this.notifyObservers();
  }

  public registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }

  public notifyObservers(): void {
    this.observable.notifyObservers();
  }
}

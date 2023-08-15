import { QuackObservable } from './quackObservable';
import { Observer } from './observer';

export class Observable implements QuackObservable {
  observers: Observer[] = new Array<Observer>();
  duck: QuackObservable;

  constructor(duck: QuackObservable) {
    this.duck = duck;
  }

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.duck);
    }
  }
}

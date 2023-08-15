import { Observable } from './observable';
import { Observer } from './observer';
import { Quackable } from './quackable';

export class QuackCounter implements Quackable {
  duck: Quackable;
  static numberOfQuacks: number = 0;

  constructor(duck: Quackable) {
    this.duck = duck;
  }

  public quack(): void {
    this.duck.quack();
    QuackCounter.numberOfQuacks++;
  }

  public static getQuacks(): number {
    return QuackCounter.numberOfQuacks;
  }

  public registerObserver(observer: Observer): void {
    this.duck.registerObserver(observer);
  }

  public notifyObservers(): void {
    this.duck.notifyObservers();
  }

  public toString(): string {
    return this.duck.toString();
  }
}

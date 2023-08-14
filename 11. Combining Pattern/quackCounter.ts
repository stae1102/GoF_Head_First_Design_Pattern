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
}

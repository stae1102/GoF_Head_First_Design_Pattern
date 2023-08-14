import { AbstractDuckFactory } from './abstractDuckfactory';
import { DuckCall } from './duckCall';
import { MallardDuck } from './mallardDuck';
import { QuackCounter } from './quackCounter';
import { Quackable } from './quackable';
import { RedheadDuck } from './redheadDuck';
import { RubberDuck } from './rubberDuck';

export class CountingDuckFactory extends AbstractDuckFactory {
  public createMallardDuck(): Quackable {
    return new QuackCounter(new MallardDuck());
  }

  public createRedheadDuck(): Quackable {
    return new QuackCounter(new RedheadDuck());
  }

  public createDuckCall(): Quackable {
    return new QuackCounter(new DuckCall());
  }

  public createRubberDuck(): Quackable {
    return new QuackCounter(new RubberDuck());
  }
}

import { AbstractDuckFactory } from './abstractDuckfactory';
import { DuckCall } from './duckCall';
import { MallardDuck } from './mallardDuck';
import { Quackable } from './quackable';
import { RedheadDuck } from './redheadDuck';
import { RubberDuck } from './rubberDuck';

export class DuckFactory extends AbstractDuckFactory {
  public createMallardDuck(): Quackable {
    return new MallardDuck();
  }

  public createRedheadDuck(): Quackable {
    return new RedheadDuck();
  }

  public createDuckCall(): Quackable {
    return new DuckCall();
  }

  public createRubberDuck(): Quackable {
    return new RubberDuck();
  }
}

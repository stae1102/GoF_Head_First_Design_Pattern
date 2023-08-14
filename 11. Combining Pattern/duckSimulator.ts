import { AbstractDuckFactory } from './abstractDuckfactory';
import { CountingDuckFactory } from './countingDuckFactory';
import { Goose } from './goose';
import { GooseAdapter } from './gooseAdapter';
import { QuackCounter } from './quackCounter';
import { Quackable } from './quackable';

class DuckSimulator {
  public static main(...args: string[]) {
    const simulator: DuckSimulator = new DuckSimulator();
    const duckFactory: AbstractDuckFactory = new CountingDuckFactory();
    simulator.simulate(duckFactory);
  }

  simulate(duckFactory: AbstractDuckFactory): void {
    const mallardDuck: Quackable = duckFactory.createMallardDuck();
    const redheadDuck: Quackable = duckFactory.createRedheadDuck();
    const duckCall: Quackable = duckFactory.createDuckCall();
    const rubberDuck: Quackable = duckFactory.createRubberDuck();
    const gooseDuck: Quackable = new GooseAdapter(new Goose());

    console.log('오리 시뮬레이션 게임');

    this._simulate(mallardDuck);
    this._simulate(redheadDuck);
    this._simulate(duckCall);
    this._simulate(rubberDuck);
    this._simulate(gooseDuck);

    console.log(`오리가 소리 낸 횟수: ${QuackCounter.getQuacks()} 번`);
  }

  _simulate(duck: Quackable): void {
    duck.quack();
  }
}

DuckSimulator.main();

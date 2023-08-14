import { DuckCall } from './duckCall';
import { Goose } from './goose';
import { GooseAdapter } from './gooseAdapter';
import { MallardDuck } from './mallardDuck';
import { QuackCounter } from './quackCounter';
import { Quackable } from './quackable';
import { RedheadDuck } from './redheadDuck';
import { RubberDuck } from './rubberDuck';

class DuckSimulator {
  public static main(...args: string[]) {
    const simulator: DuckSimulator = new DuckSimulator();
    simulator.simulate();
  }

  simulate(): void {
    const mallardDuck: Quackable = new QuackCounter(new MallardDuck());
    const redheadDuck: Quackable = new QuackCounter(new RedheadDuck());
    const duckCall: Quackable = new QuackCounter(new DuckCall());
    const rubberDuck: Quackable = new QuackCounter(new RubberDuck());
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

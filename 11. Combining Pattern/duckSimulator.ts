import { DuckCall } from './duckCall';
import { Goose } from './goose';
import { GooseAdapter } from './gooseAdapter';
import { MallardDuck } from './mallardDuck';
import { Quackable } from './quackable';
import { RedHeadDuck } from './redheadDuck';
import { RubberDuck } from './rubberDuck';

class DuckSimulator {
  public static main(...args: string[]) {
    const simulator: DuckSimulator = new DuckSimulator();
    simulator.simulate();
  }

  simulate(): void {
    const mallardDuck: Quackable = new MallardDuck();
    const redheadDuck: Quackable = new RedHeadDuck();
    const duckCall: Quackable = new DuckCall();
    const rubberDuck: Quackable = new RubberDuck();
    const gooseDuck: Quackable = new GooseAdapter(new Goose());

    console.log('오리 시뮬레이션 게임');

    this._simulate(mallardDuck);
    this._simulate(redheadDuck);
    this._simulate(duckCall);
    this._simulate(rubberDuck);
    this._simulate(gooseDuck);
  }

  _simulate(duck: Quackable): void {
    duck.quack();
  }
}

DuckSimulator.main();

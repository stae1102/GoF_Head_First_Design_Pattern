import { AbstractDuckFactory } from './abstractDuckfactory';
import { CountingDuckFactory } from './countingDuckFactory';
import { Flock } from './flock';
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

    console.log('오리 시뮬레이션 게임: 무리 (+컴포지트)');

    const flockOfDucks: Flock = new Flock();

    flockOfDucks.add(redheadDuck);
    flockOfDucks.add(duckCall);
    flockOfDucks.add(rubberDuck);
    flockOfDucks.add(gooseDuck);

    const flockOfMallards: Flock = new Flock();

    const mallardOne: Quackable = duckFactory.createMallardDuck();
    const mallardTwo: Quackable = duckFactory.createMallardDuck();
    const mallardThree: Quackable = duckFactory.createMallardDuck();
    const mallardFour: Quackable = duckFactory.createMallardDuck();

    flockOfMallards.add(mallardOne);
    flockOfMallards.add(mallardTwo);
    flockOfMallards.add(mallardThree);
    flockOfMallards.add(mallardFour);

    flockOfDucks.add(flockOfMallards);

    console.log('오리 시뮬레이션 게임: 전체 무리');
    this._simulate(flockOfDucks);

    console.log('오리 시뮬레이션 게임: 물오리 무리');
    this._simulate(flockOfMallards);

    console.log(`오리가 소리 낸 횟수: ${QuackCounter.getQuacks()} 번`);
  }

  _simulate(duck: Quackable): void {
    duck.quack();
  }
}

DuckSimulator.main();

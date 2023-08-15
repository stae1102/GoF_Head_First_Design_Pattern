import { AbstractDuckFactory } from './abstractDuckfactory';
import { CountingDuckFactory } from './countingDuckFactory';
import { Flock } from './flock';
import { Goose } from './goose';
import { GooseAdapter } from './gooseAdapter';
import { QuackCounter } from './quackCounter';
import { Quackable } from './quackable';
import { Quackologist } from './quackologist';

class DuckSimulator {
  public static main(...args: string[]) {
    const simulator: DuckSimulator = new DuckSimulator();
    const duckFactory: AbstractDuckFactory = new CountingDuckFactory();
    simulator.simulate(duckFactory);
  }

  simulate(duckFactory: AbstractDuckFactory): void {
    const redheadDuck: Quackable = duckFactory.createRedheadDuck();
    const duckCall: Quackable = duckFactory.createDuckCall();
    const rubberDuck: Quackable = duckFactory.createRubberDuck();
    const gooseDuck: Quackable = new GooseAdapter(new Goose());

    const flockOfDucks: Flock = new Flock();

    flockOfDucks.add(redheadDuck);
    flockOfDucks.add(duckCall);
    flockOfDucks.add(rubberDuck);
    flockOfDucks.add(gooseDuck);

    const flockOfMallards = new Flock();

    const mallardOne = duckFactory.createMallardDuck();
    const mallardTwo = duckFactory.createMallardDuck();
    const mallardThree = duckFactory.createMallardDuck();
    const mallardFour = duckFactory.createMallardDuck();

    flockOfMallards.add(mallardOne);
    flockOfMallards.add(mallardTwo);
    flockOfMallards.add(mallardThree);
    flockOfMallards.add(mallardFour);

    flockOfDucks.add(flockOfMallards);

    console.log('오리 시뮬레이션 게임 (+옵저버)');

    const quackologist: Quackologist = new Quackologist();
    flockOfDucks.registerObserver(quackologist);

    this._simulate(flockOfDucks);

    console.log(`오리가 소리 낸 횟수: ${QuackCounter.getQuacks()} 번`);
  }

  _simulate(duck: Quackable): void {
    duck.quack();
  }
}

DuckSimulator.main();

import { GumballMachine } from './gumbleMachine';
import { State } from './state';

export class NoQuarter implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('동전을 넣었습니다.');
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }

  ejectQuarter(): void {
    console.log('동전을 넣어 주세요.');
  }

  turnCrank(): void {
    console.log('동전을 넣어 주세요.');
  }

  dispense(): void {
    console.log('동전을 넣어 주세요.');
  }
}

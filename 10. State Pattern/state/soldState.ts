import { GumballMachine } from './gumbleMachine';
import { State } from './state';

export class SoldState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('알맹이를 내보내고 있습니다.');
  }

  ejectQuarter(): void {
    console.log('이미 알맹이를 뽑으셨습니다.');
  }

  turnCrank(): void {
    console.log('손잡이는 한 번만 돌려주세요.');
  }

  dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
}

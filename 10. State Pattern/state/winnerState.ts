import { GumballMachine } from './gumbleMachine';
import { State } from './state';

export class WinnerState implements State {
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
    console.log('손잡이는 한 번만 돌릴 수 있습니다.');
  }

  dispense(): void {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() === 0) {
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    } else {
      this.gumballMachine.releaseBall();
      console.log('축하드립니다! 알맹이를 하나 더 받으실 수 있습니다.');
      if (this.gumballMachine.getCount() > 0) {
        this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
      } else {
        console.log('더 이상 알맹이가 없습니다.');
        this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      }
    }
  }
}

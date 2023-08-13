import { GumballMachine } from './gumbleMachine';
import { State } from './state';

export class SoldOutState implements State {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log('매진되어 동전을 넣을 수 없습니다.');
  }

  ejectQuarter(): void {
    console.log('동전을 넣지 않아 반환할 수 없습니다.');
  }

  turnCrank(): void {
    console.log('매진되어 손잡이를 돌릴 수 없습니다.');
  }

  dispense(): void {
    console.log('알맹이를 내보낼 수 없습니다.');
  }
}

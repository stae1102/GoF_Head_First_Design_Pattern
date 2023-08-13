import { HasQuarterState } from './hasQuarterState';
import { NoQuarterState } from './noQuarterState';
import { SoldOutState } from './soldOutState';
import { SoldState } from './soldState';
import { State } from './state';
import { WinnerState } from './winnerState';

export class GumballMachine {
  noQuarterState: State;
  hasQuarterState: State;
  soldState: State;
  soldOutState: State;
  winnerState: State;

  state: State; // 상태를 관리하는 인스턴스 변수
  count: number = 0; // 기계에 들어있는 알맹이 개수 인스턴스 변수

  constructor(numberGumballs: number) {
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.soldOutState = new SoldOutState(this);
    this.winnerState = new WinnerState(this);

    this.count = numberGumballs;
    if (numberGumballs > 0) {
      // 알맹이 개수가 0이면 동전을 넣어주길 기다리는 상태입니다.
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  // 객체의 행동을 메서드로 구현

  // 동전 투입
  insertQuarter(): void {
    this.state.insertQuarter();
  }

  // 동전 반환
  ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  // 손잡이 돌림
  turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  toString(): void {
    console.log('\n주식회사 왕뽑기');
    console.log('타입스크립트로 돌아가는 최신형 뽑기 기계');
    console.log(`남은 개수: ${this.count}개`);
    if (this.count === 0) {
      console.log('매진\n');
    } else {
      console.log('동전 투입 대기중\n');
    }
  }

  releaseBall() {
    console.log('알맹이를 내보내고 있습니다.');
    if (this.count > 0) {
      this.count--;
    }
  }

  setState(state: State) {
    this.state = state;
  }

  getHasQuarterState() {
    return this.hasQuarterState;
  }

  getNoQuarterState() {
    return this.noQuarterState;
  }

  getSoldState() {
    return this.soldState;
  }

  getSoldOutState() {
    return this.soldOutState;
  }

  getWinnerState() {
    return this.winnerState;
  }

  getCount() {
    return this.count;
  }
}

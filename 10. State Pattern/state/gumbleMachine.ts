import { HasQuarterState } from './hasQuarterState';
import { NoQuarterState } from './noQuarterState';
import { SoldOutState } from './soldOutState';
import { SoldState } from './soldState';
import { State } from './state';

export class GumballMachine {
  noQuarterState: State;
  hasQuarterState: State;
  soldState: State;
  soldOutState: State;

  state: State; // 상태를 관리하는 인스턴스 변수
  count: number = 0; // 기계에 들어있는 알맹이 개수 인스턴스 변수

  constructor(numberGumballs: number) {
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.soldOutState = new SoldOutState(this);

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
    if (this.state === this.hasQuarterState) {
      console.log('동전은 한 개만 넣어 주세요.'); // 이미 동전이 투입되어 있음
    } else if (this.state === this.noQuarterState) {
      this.state = this.hasQuarterState;
      console.log('동전을 넣으셨습니다.'); // 동전을 받은 다음 hasQuarterState 상태로 변경
    } else if (this.state === this.soldOutState) {
      console.log('매진되었습니다. 다음 기회에 이용해 주세요.'); // 매진 상태에서는 뽑을 알맹이가 없으므로 동전을 반환
    } else if (this.state === this.soldState) {
      console.log('알맹이를 내보내고 있습니다.'); // 손잡이를 돌렸을 때 아직 판매 상태에 있다면 기다려달라는 메시지 출력
    }
  }

  // 동전 반환
  ejectQuarter(): void {
    if (this.state === this.hasQuarterState) {
      console.log('동전을 반환합니다.'); // 동전이 있으면 반환 후 NO QUARTER 상태로 변경
      this.state = this.noQuarterState;
    } else if (this.state === this.noQuarterState) {
      console.log('동전을 넣어 주세요.'); // 동전이 없으므로 돌려줄 동전이 없음
    } else if (this.state === this.soldOutState) {
      console.log('동전을 넣지 않으셨습니다. 동전이 반환되지 않습니다.'); // 매진 상태에서는 동전을 투입할 수 없으므로 돌려줄 일도 없음
    } else if (this.state === this.soldState) {
      console.log('이미 알맹이를 뽑으셨습니다.'); // 손잡이를 돌렸다면 이미 알맹이를 뽑았으므로 동전을 돌려줄 수 없음
    }
  }

  // 손잡이 돌림
  turnCrank(): void {
    if (this.state === this.hasQuarterState) {
      console.log('손잡이를 돌리셨습니다.'); // 사용자는 알맹이를 받을 수 있으며, 상태를 SOLD로 바꾸고 dispense 메서드 호출
      this.state = this.soldState;
      this.dispense();
    } else if (this.state === this.noQuarterState) {
      console.log('동전을 넣어 주세요.'); // 동전을 먼저 넣어야 합니다.
    } else if (this.state === this.soldOutState) {
      console.log('매진되었습니다.'); // 알맹이가 없으므로 반환할 것이 없음
    } else if (this.state === this.soldState) {
      console.log('손잡이는 한 번만 돌려 주세요.'); // 이미 손잡이를 돌린 상태입니다.
    }
  }

  // 알맹이 내보내기
  dispense(): void {
    if (this.state === this.hasQuarterState) {
      console.log('알맹이를 내보낼 수 없습니다.'); // 불가한 상황
    } else if (this.state === this.noQuarterState) {
      console.log('동전을 넣어 주세요.'); // 불가한 상황
    } else if (this.state === this.soldOutState) {
      console.log('매진되었습니다.'); // 불가한 상황
    } else if (this.state === this.soldState) {
      console.log('알맹이를 내보내고 있습니다.'); // SOLD 상태이므로 알맹이를 내보냄
      this.count--;
      if (this.count === 0) {
        // 매진되었는지 확인
        console.log('더 이상 알맹이가 없습니다.');
        this.state = this.soldOutState;
      } else {
        this.state = this.noQuarterState;
      }
    }
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

  getCount() {
    return this.count;
  }
}

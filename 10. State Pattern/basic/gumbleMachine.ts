export class GumballMachine {
  static SOLD_OUT: number = 0;
  static NO_QUARTER: number = 1;
  static HAS_QUARTER: number = 2;
  static SOLD: number = 3;

  state: number = GumballMachine.SOLD_OUT; // 상태를 관리하는 인스턴스 변수
  count: number = 0; // 기계에 들어있는 알맹이 개수 인스턴스 변수

  constructor(count: number) {
    this.count = count;
    if (count > 0) {
      // 알맹이 개수가 0이면 동전을 넣어주길 기다리는 상태입니다.
      this.state = GumballMachine.NO_QUARTER;
    }
  }

  // 객체의 행동을 메서드로 구현

  // 동전 투입
  insertQuarter(): void {
    if (this.state === GumballMachine.HAS_QUARTER) {
      console.log('동전은 한 개만 넣어 주세요.'); // 이미 동전이 투입되어 있음
    } else if (this.state === GumballMachine.NO_QUARTER) {
      this.state = GumballMachine.HAS_QUARTER;
      console.log('동전을 넣으셨습니다.'); // 동전을 받은 다음 HAS_QUARTER 상태로 변경
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log('매진되었습니다. 다음 기회에 이용해 주세요.'); // 매진 상태에서는 뽑을 알맹이가 없으므로 동전을 반환
    } else if (this.state === GumballMachine.SOLD) {
      console.log('알맹이를 내보내고 있습니다.'); // 손잡이를 돌렸을 때 아직 판매 상태에 있다면 기다려달라는 메시지 출력
    }
  }

  // 동전 반환
  ejectQuarter(): void {
    if (this.state === GumballMachine.HAS_QUARTER) {
      console.log('동전을 반환합니다.'); // 동전이 있으면 반환 후 NO QUARTER 상태로 변경
      this.state = GumballMachine.NO_QUARTER;
    } else if (this.state === GumballMachine.NO_QUARTER) {
      console.log('동전을 넣어 주세요.'); // 동전이 없으므로 돌려줄 동전이 없음
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log('동전을 넣지 않으셨습니다. 동전이 반환되지 않습니다.'); // 매진 상태에서는 동전을 투입할 수 없으므로 돌려줄 일도 없음
    } else if (this.state === GumballMachine.SOLD) {
      console.log('이미 알맹이를 뽑으셨습니다.'); // 손잡이를 돌렸다면 이미 알맹이를 뽑았으므로 동전을 돌려줄 수 없음
    }
  }

  // 손잡이 돌림
  turnCrank(): void {
    if (this.state === GumballMachine.HAS_QUARTER) {
      console.log('손잡이를 돌리셨습니다.'); // 사용자는 알맹이를 받을 수 있으며, 상태를 SOLD로 바꾸고 dispense 메서드 호출
      this.state = GumballMachine.SOLD;
      this.dispense();
    } else if (this.state === GumballMachine.NO_QUARTER) {
      console.log('동전을 넣어 주세요.'); // 동전을 먼저 넣어야 합니다.
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log('매진되었습니다.'); // 알맹이가 없으므로 반환할 것이 없음
    } else if (this.state === GumballMachine.SOLD) {
      console.log('손잡이는 한 번만 돌려 주세요.'); // 이미 손잡이를 돌린 상태입니다.
    }
  }

  // 알맹이 내보내기
  dispense(): void {
    if (this.state === GumballMachine.HAS_QUARTER) {
      console.log('알맹이를 내보낼 수 없습니다.'); // 불가한 상황
    } else if (this.state === GumballMachine.NO_QUARTER) {
      console.log('동전을 넣어 주세요.'); // 불가한 상황
    } else if (this.state === GumballMachine.SOLD_OUT) {
      console.log('매진되었습니다.'); // 불가한 상황
    } else if (this.state === GumballMachine.SOLD) {
      console.log('알맹이를 내보내고 있습니다.'); // SOLD 상태이므로 알맹이를 내보냄
      this.count--;
      if (this.count === 0) {
        // 매진되었는지 확인
        console.log('더 이상 알맹이가 없습니다.');
        this.state = GumballMachine.SOLD_OUT;
      } else {
        this.state = GumballMachine.NO_QUARTER;
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
}

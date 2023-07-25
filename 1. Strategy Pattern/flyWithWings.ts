import { FlyBehavior } from './flyBehavior';

// 오리의 나는 행동을 구현한 클래스 정의
export class FlyWithWings implements FlyBehavior {
  public fly(): void {
    console.log('날고 있어요!');
  }
}

import { QuackBehavior } from './quackBehavior';

// 오리의 꽥꽥 거리는 행동을 구현한 클래스 정의
export class Quack implements QuackBehavior {
  public quack(): void {
    console.log('꽥');
  }
}

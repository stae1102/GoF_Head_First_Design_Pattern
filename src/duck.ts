import { FlyBehavior } from './flyBehavior';
import { QuackBehavior } from './quackBehavior';

export abstract class Duck {
  // 꽥꽥 거리는 행동을 캡슐화한 부분을 QuackBehavior 인터페이스를 구현한 별도의 클래스로 받아서 사용
  quackBehavior: QuackBehavior;

  // 나는 행동을 캡슐화한 부분을 FlyBehavior 인터페이스를 구현한 별도의 클래스로 받아서 사용
  flyBehavior: FlyBehavior;

  constructor() {}

  public abstract display(): void;

  // 캡슐화한 행동을 서브 클래스에 위임
  public performQuack(): void {
    this.quackBehavior.quack();
  }

  public performFly(): void {
    this.flyBehavior.fly();
  }

  public swim(): void {
    console.log('모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠.');
  }
}

import { Beverage } from './beverage';

// 데코레이팅을 위해 Beverage 객체가 들어갈 자리에 들어갈 수 있어야 하므로 Beverage 객체를 확장
export abstract class CondimentDecorator extends Beverage {
  // 각 데코레이터가 감쌀 음료를 나타내는 Beverage 객체를 지정
  // 음료를 지정할 때는 데코레이터에서 어떤 음료든 감쌀 수 있도록 Beverage 슈퍼 클래스 유형 사용
  beverage: Beverage;

  // 모든 첨가물 데코레이터에서 getDescription() 메서드를 새로 구현
  public abstract getDescription(): string;
}

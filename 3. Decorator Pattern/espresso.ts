import { Beverage } from './beverage';

// Beverage 클래스를 확장
export class Espresso extends Beverage {
  constructor() {
    super();
    // Beverage 슈퍼 클래스로부터 상속 받은 description 인스턴스 변수에 값을 평가하여 할당
    this.description = '에스프레소';
  }

  // 에스프레소 가격 계산
  public cost(): number {
    return 1.99;
  }
}

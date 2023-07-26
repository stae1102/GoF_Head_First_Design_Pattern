import { Beverage } from './beverage';
import { CondimentDecorator } from './condimentDecorator';

export class Mocha extends CondimentDecorator {
  // 1. 감싸고자 하는 음료를 저장하는 인스턴스 변수
  // 2. 인스턴스 변수를 감싸고자 하는 객체로 설정하는 생성자
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    // 장식하고 있는 객체에 작업을 위임하여 설명을 가져오고 모카를 더하여 리턴
    return this.beverage.getDescription() + ', 모카';
  }

  public cost(): number {
    // 장식하고 있는 객체에 가격을 구하는 작업을 위임해서 음료값을 구한 다음 모카 가격을 더해서 합하여 리턴
    return this.beverage.cost() + 0.2;
  }
}

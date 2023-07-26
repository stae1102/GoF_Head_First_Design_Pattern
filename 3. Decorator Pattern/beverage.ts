// Beverage는 추상 클래스로, getDescription()과 cost()라는 두 개의 메서드를 가진다.
export abstract class Beverage {
  description: string = '제목 없음';

  public getDescription() {
    return this.description;
  }

  // cost는 서브 클래스에서 구현해야 함.
  public abstract cost(): number;
}

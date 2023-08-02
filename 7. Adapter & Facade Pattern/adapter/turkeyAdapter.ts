import { Duck } from './duck';
import { Turkey } from './turkey';

export class TurkeyAdapter implements Duck {
  turkey: Turkey;

  public constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  public quack(): void {
    this.turkey.gobble();
  }

  public fly(): void {
    for (let i = 0; i < 5; i++) {
      this.turkey.fly();
    }
  }
}

import { FlyBehavior } from './flyBehavior';

export class FlyRocketPowered implements FlyBehavior {
  public fly(): void {
    console.log('로켓 추진으로 날아갑니다.');
  }
}

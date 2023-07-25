import { QuackBehavior } from './quackBehavior';

export class MuteQuack implements QuackBehavior {
  public quack(): void {
    console.log('<< 조용 ~ >>');
  }
}

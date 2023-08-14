import { Quackable } from './quackable';

export class DuckCall implements Quackable {
  public quack(): void {
    console.log('꽉꽉');
  }
}

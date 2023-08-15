import { Observer } from './observer';
import { QuackObservable } from './quackObservable';

export class Quackologist implements Observer {
  public update(duck: QuackObservable): void {
    console.log(`꽥꽥학자: ${duck.constructor.name}가 방금 소리냈다.`);
  }
}

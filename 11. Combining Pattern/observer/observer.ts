import { QuackObservable } from './quackObservable';

export interface Observer {
  update(duck: QuackObservable): void;
}

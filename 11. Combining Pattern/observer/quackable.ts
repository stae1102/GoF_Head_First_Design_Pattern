import { QuackObservable } from './quackObservable';

export interface Quackable extends QuackObservable {
  quack(): void;
}

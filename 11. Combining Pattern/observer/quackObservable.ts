import { Observer } from './observer';

export interface QuackObservable {
  registerObserver(observer: Observer): void;
  notifyObservers(): void;
}

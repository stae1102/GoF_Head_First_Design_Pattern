import { Quackable } from './quackable';

export class Flock implements Quackable {
  quackers: Quackable[] = new Array<Quackable>();

  public add(quacker: Quackable): void {
    this.quackers.push(quacker);
  }

  public quack(): void {
    for (const quacker of this.quackers) {
      quacker.quack();
    }
  }
}

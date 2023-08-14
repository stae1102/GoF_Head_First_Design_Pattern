import { Goose } from './goose';
import { Quackable } from './quackable';

export class GooseAdapter implements Quackable {
  goose: Goose;

  constructor(goose: Goose) {
    this.goose = goose;
  }

  public quack(): void {
    this.goose.honk();
  }
}

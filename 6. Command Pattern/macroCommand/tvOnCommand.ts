import { Command } from './command';
import { TV } from './tv';

export class TvOnCommand implements Command {
  tv: TV;

  public constructor(tv: TV) {
    this.tv = tv;
  }

  public execute(): void {
    this.tv.on();
    this.tv.setInputChannel();
  }

  public undo(): void {
    this.tv.off();
  }
}

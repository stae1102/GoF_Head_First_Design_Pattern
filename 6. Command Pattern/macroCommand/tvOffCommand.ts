import { Command } from './command';
import { TV } from './tv';

export class TvOffCommand implements Command {
  tv: TV;

  public constructor(tv: TV) {
    this.tv = tv;
  }

  public execute(): void {
    this.tv.off();
  }

  public undo(): void {
    this.tv.on();
  }
}

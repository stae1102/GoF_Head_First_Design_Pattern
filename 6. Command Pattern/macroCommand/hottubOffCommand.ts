import { Command } from './command';
import { Hottub } from './hottub';

export class HottubOffCommand implements Command {
  hottub: Hottub;

  public constructor(hottub: Hottub) {
    this.hottub = hottub;
  }

  public execute(): void {
    this.hottub.off();
  }

  public undo(): void {
    this.hottub.on();
  }
}

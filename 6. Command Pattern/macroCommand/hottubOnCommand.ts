import { Command } from './command';
import { Hottub } from './hottub';

export class HottubOnCommand implements Command {
  hottub: Hottub;

  public constructor(hottub: Hottub) {
    this.hottub = hottub;
  }

  public execute(): void {
    this.hottub.on();
  }

  public undo(): void {
    this.hottub.off();
  }
}

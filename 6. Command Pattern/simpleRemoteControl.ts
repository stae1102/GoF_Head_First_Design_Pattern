import { Command } from './command';

export class SimpleRemoteControl {
  slot: Command;

  public constructor() {}

  public setCommand(command: Command) {
    this.slot = command;
  }

  public buttonWasPressed(): void {
    this.slot.execute();
  }
}

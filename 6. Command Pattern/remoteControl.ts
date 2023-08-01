import { Command } from './command';
import { NoCommand } from './noCommand';

export class RemoteControl {
  onCommands: Command[];
  offCommands: Command[];

  public constructor() {
    this.onCommands = new Array<Command>(7);
    this.offCommands = new Array<Command>(7);

    const noCommand = new NoCommand();
    for (let i = 0; i < 7; i++) {
      this.onCommands[i] = noCommand;
      this.offCommands[i] = noCommand;
    }
  }

  public setCommand(
    slot: number,
    onCommand: Command,
    offCommand: Command
  ): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
  }

  public offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
  }

  public toString(): string {
    let stringBuff = '\n------ 리모콘 ------\n';
    for (let i = 0; i < this.onCommands.length; i++) {
      stringBuff += `[slot ${i}] ${this.onCommands[i].constructor.name}     ${this.offCommands[i].constructor.name}\n`;
    }
    return stringBuff;
  }
}

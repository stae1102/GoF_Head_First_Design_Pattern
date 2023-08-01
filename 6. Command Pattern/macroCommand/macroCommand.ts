import { Command } from './command';

export class MacroCommand implements Command {
  commands: Command[];

  public constructor(commands: Command[]) {
    this.commands = commands;
  }

  public execute(): void {
    for (let i = 0; i < this.commands.length; i++) {
      this.commands[i].execute();
    }
  }

  public undo(): void {
    for (let i = 0; i < this.commands.length; i++) {
      this.commands[i].undo();
    }
  }
}

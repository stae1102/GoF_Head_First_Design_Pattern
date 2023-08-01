import { Command } from './command';

export class NoCommand implements Command {
  public execute(): void {}
}

import { Command } from './command';
import { GarageDoor } from './garageDoor';

export class GarageDoorUpCommand implements Command {
  garageDoor: GarageDoor;

  public constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  public execute(): void {
    this.garageDoor.up();
  }
}

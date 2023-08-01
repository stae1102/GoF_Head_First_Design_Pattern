import { Command } from './command';
import { GarageDoor } from './garageDoor';

export class GarageDoorDownCommand implements Command {
  garageDoor: GarageDoor;

  public constructor(garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }

  public execute(): void {
    this.garageDoor.stop();
    this.garageDoor.lightOff();
    this.garageDoor.down();
  }
}

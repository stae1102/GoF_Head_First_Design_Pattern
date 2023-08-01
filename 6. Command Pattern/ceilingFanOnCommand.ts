import { CeilingFan } from './ceilingFan';
import { Command } from './command';

export class CeilingFanOnCommand implements Command {
  ceilingFan: CeilingFan;

  public constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  public execute(): void {
    this.ceilingFan.high();
  }
}

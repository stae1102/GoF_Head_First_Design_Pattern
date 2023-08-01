import { Command } from './command';
import { CeilingFan } from './ceilingFan';

export class CeilingFanMediumCommand implements Command {
  ceilingFan: CeilingFan;
  prevSpeed: number;

  public constructor(ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  public execute(): void {
    this.prevSpeed = this.ceilingFan.getSpeed();
    this.ceilingFan.medium();
  }

  public undo(): void {
    if (this.prevSpeed === CeilingFan.HIGH) {
      this.ceilingFan.high();
    } else if (this.prevSpeed === CeilingFan.MEDIUM) {
      this.ceilingFan.medium();
    } else if (this.prevSpeed === CeilingFan.LOW) {
      this.ceilingFan.low();
    } else if (this.prevSpeed === CeilingFan.OFF) {
      this.ceilingFan.off();
    }
  }
}

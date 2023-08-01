import { Command } from './command';
import { Light } from './light';

export class LightOffCommand implements Command {
  light: Light;

  public constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }

  public undo(): void {
    this.light.on();
  }
}

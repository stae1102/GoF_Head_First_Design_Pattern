import { Command } from './command';
import { Light } from './light';

export class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.on();
  }
}

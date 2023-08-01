import { Command } from './command';
import { Stereo } from './stereo';

export class StereoOnCommand implements Command {
  stereo: Stereo;

  public constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.on();
  }

  public undo(): void {
    this.stereo.off();
  }
}

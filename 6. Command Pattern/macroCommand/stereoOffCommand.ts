import { Command } from './command';
import { Stereo } from './stereo';

export class StereoOffCommand implements Command {
  stereo: Stereo;

  public constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.off();
  }

  public undo(): void {
    this.stereo.on();
  }
}

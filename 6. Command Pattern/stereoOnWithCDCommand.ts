import { Command } from './command';
import { Stereo } from './stereo';

export class StereoOnWithCDCommand implements Command {
  stereo: Stereo;

  public constructor(stereo: Stereo) {
    this.stereo = stereo;
  }

  public execute(): void {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(11);
  }
}

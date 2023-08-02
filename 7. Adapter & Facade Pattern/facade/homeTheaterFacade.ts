import { Amplifier } from './amplifier';
import { Tuner } from './tuner';
import { StreamingPlayer } from './streamingPlayer';
import { Projector } from './projector';
import { TheaterLights } from './theaterLights';
import { Screen } from './screen';
import { PopcornPopper } from './popcornPopper';

export class HomeTheaterFacade {
  public constructor(
    public amp: Amplifier,
    public tuner: Tuner,
    public player: StreamingPlayer,
    public projector: Projector,
    public lights: TheaterLights,
    public screen: Screen,
    public popper: PopcornPopper
  ) {}

  public watchMovies(movie: string): void {
    console.log('영화 볼 준비 중');
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amp.on();
    this.amp.setStreamingPlayer(this.player);
    this.amp.setSurroundSound();
    this.amp.setVolume(5);
    this.player.on();
    this.player.play(movie);
  }

  public endMovie(): void {
    console.log('홈 시어터를 끄는 중');
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amp.off();
    this.player.stop();
    this.player.off();
  }
}

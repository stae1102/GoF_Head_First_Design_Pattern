import { Amplifier } from './amplifier';
import { HomeTheaterFacade } from './homeTheaterFacade';
import { PopcornPopper } from './popcornPopper';
import { Projector } from './projector';
import { Screen } from './screen';
import { StreamingPlayer } from './streamingPlayer';
import { TheaterLights } from './theaterLights';
import { Tuner } from './tuner';

const amp: Amplifier = new Amplifier('증폭기');
const tuner: Tuner = new Tuner('튜너', amp);
const player: StreamingPlayer = new StreamingPlayer('스트리밍 플레이어', amp);
const projector: Projector = new Projector('프로젝터', player);
const screen: Screen = new Screen('스크린');
const lights: TheaterLights = new TheaterLights('조명');
const poppoer: PopcornPopper = new PopcornPopper('팝콘 기계');

const homeTheater: HomeTheaterFacade = new HomeTheaterFacade(
  amp,
  tuner,
  player,
  projector,
  lights,
  screen,
  poppoer
);
homeTheater.watchMovies('인디아나 존스:레이더스');
homeTheater.endMovie();

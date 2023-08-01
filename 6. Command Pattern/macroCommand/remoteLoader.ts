import { RemoteControlWithUndo } from './remoteControlWithUndo';
import { Light } from './light';
import { TV } from './tv';
import { Stereo } from './stereo';
import { Hottub } from './hottub';
import { LightOnCommand } from './lightOnCommand';
import { TvOnCommand } from './tvOnCommand';
import { StereoOnCommand } from './stereoOnCommand';
import { HottubOnCommand } from './hottubOnCommand';
import { LightOffCommand } from './lightOffCommand';
import { TvOffCommand } from './tvOffCommand';
import { StereoOffCommand } from './stereoOffCommand';
import { HottubOffCommand } from './hottubOffCommand';
import { Command } from './command';
import { MacroCommand } from './macroCommand';

const remoteControl: RemoteControlWithUndo = new RemoteControlWithUndo(); // 리모컨 인보커

/**
 * 리시버 초기화
 */
const light: Light = new Light('거실'); // 거실 조명 객체 추가
const tv: TV = new TV('거실'); // 거실 TV 객체 추가
const stereo: Stereo = new Stereo('거실'); // 거실 오디오 객체 추가
const hottub: Hottub = new Hottub(); // 욕조 객체 추가

/**
 * ON 커맨드 객체 초기화
 */
const lightOn: LightOnCommand = new LightOnCommand(light);
const tvOn: TvOnCommand = new TvOnCommand(tv);
const stereoOn: StereoOnCommand = new StereoOnCommand(stereo);
const hottubOn: HottubOnCommand = new HottubOnCommand(hottub);

/**
 * OFF 커맨드 객체 초기화
 */
const lightOff: LightOffCommand = new LightOffCommand(light);
const tvOff: TvOffCommand = new TvOffCommand(tv);
const stereoOff: StereoOffCommand = new StereoOffCommand(stereo);
const hottubOff: HottubOffCommand = new HottubOffCommand(hottub);

/**
 * ON 커맨드용 배열과 OFF 커맨드용 배열 추가
 */
const partyOn: Command[] = [lightOn, stereoOn, tvOn, hottubOn];
const partyOff: Command[] = [lightOff, stereoOff, tvOff, hottubOff];

/**
 * ON 커맨드와 OFF 커맨드 추가
 */
const partyOnMacro: MacroCommand = new MacroCommand(partyOn);
const partyOffMacro: MacroCommand = new MacroCommand(partyOff);

/**
 * 인보커에 커맨드 객체 등록
 */
remoteControl.setCommand(0, partyOnMacro, partyOffMacro);

console.log(remoteControl.toString());
console.log('--- 매크로 ON ---');
remoteControl.onButtonWasPushed(0);
console.log('--- 매크로 OFF ---');
remoteControl.offButtonWasPushed(0);
